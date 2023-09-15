import { Employee } from '@modules/employee/infra/typeorm/entities/employee.entity';
import { PlanDetail } from '@modules/plan/infra/typeorm/entities/plan-detail.entity';
import { TeamProps } from '@modules/team/domain/models/team.model';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('teams')
export class Team implements TeamProps {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Employee, employees => employees.team, {
    cascade: ['remove'],
  })
  employees?: Employee[];

  @OneToMany(() => PlanDetail, planDetails => planDetails.team, {
    cascade: ['remove'],
  })
  planDetails?: PlanDetail[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
