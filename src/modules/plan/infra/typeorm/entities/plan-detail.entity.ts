import { PlanDetailProps } from '@modules/plan/domain/models/plan-detail.model';
import { Team } from '@modules/team/infra/typeorm/entities/team.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Plan } from './plan.entity';

@Entity('plan_details')
export class PlanDetail implements PlanDetailProps {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'entry_date' })
  entryDate: Date;

  @Column({ name: 'departure_date' })
  departureDate: Date;

  @Column({ name: 'production_sheet' })
  productionSheet: number;

  @Column({ name: 'number_pairs', type: 'int' })
  numberPairs: number;

  @Column({ precision: 2 })
  billed: number;

  @Column({ name: 'billed_date' })
  billedDate: Date;

  @Column({ name: 'payment_date' })
  paymentDate: Date;

  @ManyToOne(() => Plan, plan => plan.planDetails, { eager: true })
  @JoinColumn({ name: 'plan_id' })
  plan: Plan;

  @ManyToOne(() => Team, team => team.planDetails, { eager: true })
  @JoinColumn({ name: 'team_id' })
  team: Team;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
