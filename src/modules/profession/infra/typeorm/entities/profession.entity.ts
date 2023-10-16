import { Employee } from '@modules/employee/infra/typeorm/entities/employee.entity';
import { ProfessionProps } from '@modules/profession/domain/models/profession.model';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('professions')
export class Profession implements ProfessionProps {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description?: string;

  @OneToMany(() => Employee, employee => employee.profession, {
    cascade: ['remove'],
  })
  employees?: Employee[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
