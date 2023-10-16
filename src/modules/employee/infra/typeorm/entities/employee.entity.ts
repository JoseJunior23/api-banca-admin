import { Profession } from '@modules/profession/infra/typeorm/entities/profession.entity';
import { Team } from '@modules/team/infra/typeorm/entities/team.entity';
import { EmployeeProps } from 'src/modules/employee/domain/models/employee.model';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('employees')
export class Employee implements EmployeeProps {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @ManyToOne(() => Profession, profession => profession.employees, {
    cascade: ['insert'],
    eager: true,
  })
  @JoinColumn({ name: 'profession_id' })
  profession: Profession;

  @ManyToOne(() => Team, team => team.employees, {
    cascade: ['insert'],
    eager: true,
  })
  @JoinColumn({ name: 'team_id' })
  team?: Team;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
