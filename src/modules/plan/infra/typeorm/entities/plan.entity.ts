import { PlanProps } from '@modules/plan/domain/models/plan.model';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('plans')
export class Plan implements PlanProps {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  variation: string;

  @Column()
  description: string;

  @Column({ name: 'entry_date' })
  entryDate: Date;

  @Column({ name: 'factory_plan' })
  factoryPlan: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
