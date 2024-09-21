import { Injectable } from '@nestjs/common';
import { EnvService } from 'src/env/env.service';
import { User } from 'src/user/entities/user.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseService {
  private dataSource: DataSource;

  constructor(private readonly envService: EnvService) {}

  async initialize() {
    if (!this.dataSource) {
      this.dataSource = new DataSource({
        type: 'postgres',
        host: this.envService.get('POSTGRES_HOST'),
        username: this.envService.get('POSTGRES_USER'),
        database: this.envService.get('POSTGRES_DB'),
        password: this.envService.get('POSTGRES_PASSWORD'),
        port: this.envService.get('POSTGRES_PORT'),
        synchronize: process.env.NODE_ENV === 'development',
        entities: ['dist/**/*.entity.js'],
        migrations: ['dist/**/*.migration.js'],
      });

      await this.dataSource.initialize();
    }

    return this.dataSource;
  }

  getDataSource(): DataSource {
    return this.dataSource;
  }
}
