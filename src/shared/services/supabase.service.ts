import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Database } from '@database/index';

@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor(private config: ConfigService) {
    const url: string = this.config.get<string>('SUPABASE_URL') || '';
    const key: string = this.config.get<string>('SUPABASE_KEY') || '';
    this.supabase = createClient<Database>(url, key);
  }

  public getClient(): SupabaseClient {
    return this.supabase;
  }

  async create<T, U>(data: T, tableName: string): Promise<U> {
    const result = await this.supabase
      .from(tableName)
      .insert(data)
      .select()
      .single();

    if (result.error) {
      throw new BadRequestException(
        `Failed to create ${tableName}: ${result.error.message}`,
      );
    }

    return result.data as U;
  }

  async findAll<T>(
    tableName: string,
    options?: {
      select?: string;
      orderBy?: { column: string; ascending?: boolean };
      limit?: number;
      offset?: number;
    },
  ): Promise<T[]> {
    let query = this.supabase.from(tableName).select(options?.select || '*');

    if (options?.orderBy) {
      query = query.order(options.orderBy.column, {
        ascending: options.orderBy.ascending ?? false,
      });
    }

    if (options?.limit) {
      query = query.limit(options.limit);
    }

    if (options?.offset) {
      query = query.range(
        options.offset,
        options.offset + (options.limit || 10) - 1,
      );
    }

    const result = await query;

    if (result.error) {
      throw new BadRequestException(
        `Failed to fetch ${tableName}: ${result.error.message}`,
      );
    }

    return (result.data as T[]) ?? [];
  }

  async findOne<T>(id: string, tableName: string): Promise<T> {
    const result = await this.supabase
      .from(tableName)
      .select('*')
      .eq('id', id)
      .single();

    if (result.error) {
      if (result.error.code === 'PGRST116') {
        throw new NotFoundException(`${tableName} with ID ${id} not found`);
      }
      throw new BadRequestException(
        `Failed to fetch ${tableName}: ${result.error.message}`,
      );
    }

    return result.data as T;
  }

  async update<T, U>(id: string, data: T, tableName: string): Promise<U> {
    const result = await this.supabase
      .from(tableName)
      .update(data)
      .eq('id', id)
      .select()
      .single();

    if (result.error) {
      if (result.error.code === 'PGRST116') {
        throw new NotFoundException(`${tableName} with ID ${id} not found`);
      }
      throw new BadRequestException(
        `Failed to update ${tableName}: ${result.error.message}`,
      );
    }

    return result.data as U;
  }

  async remove(id: string, tableName: string): Promise<void> {
    const { error } = await this.supabase.from(tableName).delete().eq('id', id);
    if (error) {
      throw new BadRequestException(
        `Failed to delete ${tableName}: ${error.message}`,
      );
    }
  }

  async findBy<U>(
    tableName: string,
    filters: Record<string, any>,
    options?: {
      select?: string;
      orderBy?: { column: string; ascending?: boolean };
      limit?: number;
    },
  ): Promise<U[]> {
    let query = this.supabase.from(tableName).select(options?.select || '*');

    // Apply filters
    Object.entries(filters).forEach(([key, value]) => {
      query = query.eq(key, value);
    });

    if (options?.orderBy) {
      query = query.order(options.orderBy.column, {
        ascending: options.orderBy.ascending ?? false,
      });
    }

    if (options?.limit) {
      query = query.limit(options.limit);
    }

    const result = await query;

    if (result.error) {
      throw new BadRequestException(
        `Failed to search ${tableName}: ${result.error.message}`,
      );
    }

    return (result.data as U[]) ?? [];
  }

  async search<U>(
    tableName: string,
    column: string,
    searchTerm: string,
    options?: {
      select?: string;
      limit?: number;
    },
  ): Promise<U[]> {
    const result = await this.supabase
      .from(tableName)
      .select(options?.select || '*')
      .ilike(column, `%${searchTerm}%`)
      .limit(options?.limit || 50);

    if (result.error) {
      throw new BadRequestException(
        `Failed to search ${tableName}: ${result.error.message}`,
      );
    }

    return (result.data as U[]) ?? [];
  }

  async count(
    tableName: string,
    filters?: Record<string, any>,
  ): Promise<number> {
    let query = this.supabase
      .from(tableName)
      .select('*', { count: 'exact', head: true });

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        query = query.eq(key, value);
      });
    }

    const result = await query;

    if (result.error) {
      throw new BadRequestException(
        `Failed to count ${tableName}: ${result.error.message}`,
      );
    }

    return result.count ?? 0;
  }
}
