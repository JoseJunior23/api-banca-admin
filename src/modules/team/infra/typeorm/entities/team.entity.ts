import { Employee } from '@modules/employee/infra/typeorm/entities/employee.entity';
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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Employee, employees => employees.team, {
    cascade: ['remove'],
  })
  employees?: Employee[];
}
