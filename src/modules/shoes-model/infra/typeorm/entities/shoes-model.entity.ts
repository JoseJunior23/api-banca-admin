import { Factory } from '@modules/factory/infra/typeorm/entities/factory.entity';
import { ShoesModelProps } from '@modules/shoes-model/domain/models/shoes-model';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('shoes_models')
export class ShoesModel implements ShoesModelProps {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  reference: string;

  @Column()
  description?: string;

  @Column({ name: 'price_pairs_shoes', type: 'float' })
  pricePairsShoes: number;

  @Column({ name: 'price_pespontador', type: 'float' })
  pricePespontador: number;

  @Column({ name: 'price_coladeira', type: 'float' })
  priceColadeira: number;

  @ManyToOne(() => Factory, factory => factory.shoesModels)
  @JoinColumn({ name: 'factory_id' })
  factory: Factory;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
