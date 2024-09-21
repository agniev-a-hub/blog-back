import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserRepositoryProvider } from './user.repository';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, UserRepositoryProvider],
  exports: [],
})
export class UserModule {}
