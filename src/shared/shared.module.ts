import { Module } from '@nestjs/common';
import { SupabaseService } from './services/supabase.service';

@Module({
  providers: [SupabaseService],
  exports: [SupabaseService], // 👈 allows other modules to use it
})
export class SharedModule {}
