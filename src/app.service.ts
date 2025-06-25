import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Badges, Database } from './database';

@Injectable()
export class AppService {
  private supabase: SupabaseClient;

  constructor(private config: ConfigService) {
    const url: string = this.config.get<string>('SUPABASE_URL') || '';
    const key: string = this.config.get<string>('SUPABASE_KEY') || '';
    this.supabase = createClient<Database>(url, key);
  }

  async getBadges(): Promise<Badges[]> {
    const { data, error } = await this.supabase.from('badges').select('*');

    if (error) {
      throw new Error(`Failed to fetch badges: ${error.message}`);
    }

    return (data as Badges[]) ?? [];
  }
}
