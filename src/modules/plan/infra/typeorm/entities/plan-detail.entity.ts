import { PlanDetailProps } from '@modules/plan/domain/models/plan-detail.model';
import { ShoesModel } from '@modules/shoes-model/infra/typeorm/entities/shoes-model.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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

  @ManyToOne(() => ShoesModel, shoesModel => shoesModel.planDetails, {
    eager: true,
  })
  @JoinColumn({ name: 'shoes_model_id' })
  shoesModel: ShoesModel;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
