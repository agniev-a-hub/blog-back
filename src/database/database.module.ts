import { Module } from '@nestjs/common';
import { EnvModule } from 'src/env/env.module';
import { EnvService } from 'src/env/env.service';
import { DatabaseService } from './database.service';

@Module({
  imports: [EnvModule],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
