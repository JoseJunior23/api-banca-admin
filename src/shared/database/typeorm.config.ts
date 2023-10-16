/* eslint-disable simple-import-sort/imports */
import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { Employee } from '@modules/employee/infra/typeorm/entities/employee.entity';
import { Factory } from '@modules/factory/infra/typeorm/entities/factory.entity';
import { PlanDetail } from '@modules/plan/infra/typeorm/entities/plan-detail.entity';
import { Plan } from '@modules/plan/infra/typeorm/entities/plan.entity';
import { Profession } from '@modules/profession/infra/typeorm/entities/profession.entity';
import { ShoesModel } from '@modules/shoes-model/infra/typeorm/entities/shoes-model.entity';
import { Team } from '@modules/team/infra/typeorm/entities/team.entity';

import { CreateEmployee1690853704046 } from './migrations/1690853704046-create-employee';
import { CreateTeam1691104035251 } from './migrations/1691104035251-create-team';
import { CreateFactory1691111185940 } from './migrations/1691111185940-create-factory';
import { CreatePlan1691454995172 } from './migrations/1691454995172-create-plan';
import { CreatePlanDetail1691541523206 } from './migrations/1691541523206-create-plan-detail';
import { CreateShoesModel1691712523021 } from './migrations/1691712523021-create-shoes-model';
import { AddTeamIdToEmployee1692536304552 } from './migrations/1692536304552-add-team-id-to-employee';
import { AddFactoryIdToShoesModel1694133403597 } from './migrations/1694133403597-add-factory-id-to-shoesModel';
import { AddPlanIdToPlanDetail1694647743536 } from './migrations/1694647743536-add-plan-id-to-plan-detail';
import { AddTeamIdToPlanDetail1694648155722 } from './migrations/1694648155722-add-team-id-to-plan-detail';
import { CreateProfessionTable1695254582654 } from './migrations/1695254582654-create-profession';
import { AddProfessionIdToEmployee1695773693587 } from './migrations/1695773693587-add-profession-id-to-employee';
import { AddFactoryIdToPlan1696100510408 } from './migrations/1696100510408-add-factory-id-to-plan';

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
      entities: [
        Employee,
        Team,
        Factory,
        Plan,
        PlanDetail,
        ShoesModel,
        Profession,
      ],
      migrations: [
        CreateEmployee1690853704046,
        CreateTeam1691104035251,
        CreateFactory1691111185940,
        CreatePlan1691454995172,
        CreatePlanDetail1691541523206,
        CreateShoesModel1691712523021,
        AddTeamIdToEmployee1692536304552,
        AddFactoryIdToShoesModel1694133403597,
        AddPlanIdToPlanDetail1694647743536,
        AddTeamIdToPlanDetail1694648155722,
        CreateProfessionTable1695254582654,
        AddProfessionIdToEmployee1695773693587,
        AddFactoryIdToPlan1696100510408,
      ],
      migrationsRun: true,
    };
  }
}
