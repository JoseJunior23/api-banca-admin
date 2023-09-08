import { FactoryProps } from '@modules/factory/domain/models/factory.model';
import { ShoesModel } from '@modules/shoes-model/infra/typeorm/entities/shoes-model.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('factories')
export class Factory implements FactoryProps {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'company_name' })
  companyName: string;

  @Column()
  phone: string;

  // @OneToMany(() => ShoesModel, shoesModels => shoesModels.factory, {
  //   cascade: true,
  // })
  // shoesModels: ShoesModel[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
