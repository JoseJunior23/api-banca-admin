import { Employee } from '@modules/employee/infra/typeorm/entities/employee.entity';
import { Team } from '@modules/team/infra/typeorm/entities/team.entity';
import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { CreateEmployee1690853704046 } from './migrations/1690853704046-create-employee';
import { CreateTeam1691104035251 } from './migrations/1691104035251-create-team';

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
      entities: [Employee, Team],
      migrations: [CreateEmployee1690853704046, CreateTeam1691104035251],
      migrationsRun: true,
    };
  }
}
