import { Employee } from '@modules/employee/infra/typeorm/entities/employee.entity';
import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfig implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      password: process.env.DB_PASS,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      entities: [Employee],
      migrations: [`${__dirname}/src/database/migrations/{.ts,*.js}`],
      migrationsRun: true,
    };
  }
}
