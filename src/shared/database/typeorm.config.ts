import { Employee } from '@modules/employee/infra/typeorm/entities/employee.entity';
import { Factory } from '@modules/factory/infra/typeorm/entities/factory.entity';
import { Plan } from '@modules/plan/infra/typeorm/entities/plan.entity';
import { Team } from '@modules/team/infra/typeorm/entities/team.entity';
import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { CreateEmployee1690853704046 } from './migrations/1690853704046-create-employee';
import { CreateTeam1691104035251 } from './migrations/1691104035251-create-team';
import { CreateFactory1691111185940 } from './migrations/1691111185940-create-factory';
import { CreatePlan1691454995172 } from './migrations/1691454995172-create-plan';

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
      entities: [Employee, Team, Factory, Plan],
      migrations: [
        CreateEmployee1690853704046,
        CreateTeam1691104035251,
        CreateFactory1691111185940,
        CreatePlan1691454995172,
      ],
      migrationsRun: true,
    };
  }
}
