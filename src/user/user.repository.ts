import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserRepositoryProvider {
  private userRepository: Repository<User>;

  constructor(private readonly databaseService: DatabaseService) {}

  async getUserRepository(): Promise<Repository<User>> {
    if (!this.userRepository) {
      const dataSource = await this.databaseService.initialize();
      this.userRepository = dataSource.getRepository(User);
    }
    return this.userRepository;
  }
}
