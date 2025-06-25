import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../../shared/services/supabase.service';
import { NewUsers, Users, UpdateUsers } from './dto/users.types';

@Injectable()
export class UsersService {
  private context = 'users';
  constructor(private readonly supabaseService: SupabaseService) {}

  async create(user: NewUsers): Promise<Users> {
    return this.supabaseService.create<NewUsers, Users>(user, this.context);
  }

  async findAll() {
    return this.supabaseService.findAll<Users>(this.context);
  }

  async update(id: string, data: UpdateUsers) {
    return this.supabaseService.update<UpdateUsers, Users>(
      id,
      data,
      this.context,
    );
  }

  async findOne(id: string): Promise<Users> {
    return this.supabaseService.findOne<Users>(id, this.context);
  }

  async remove(id: string): Promise<void> {
    return this.supabaseService.remove(id, this.context);
  }
}
