import { Factory } from '@modules/factory/infra/typeorm/entities/factory.entity';
import { PlanProps } from '@modules/plan/domain/models/plan.model';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { PlanDetail } from './plan-detail.entity';

@Entity('plans')
export class Plan implements PlanProps {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  variation: string;

  @Column()
  description?: string;

  @Column({ name: 'entry_date' })
  entryDate: Date;

  @Column({ name: 'factory_plan' })
  factoryPlan: number;

  @ManyToOne(() => Factory, factory => factory.plans, { eager: true })
  @JoinColumn({ name: 'factory_id' })
  factory: Factory;

  @OneToMany(() => PlanDetail, planDetails => planDetails.plan)
  planDetails?: PlanDetail[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
