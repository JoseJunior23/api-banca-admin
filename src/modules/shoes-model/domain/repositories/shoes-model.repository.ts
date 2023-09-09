import { CreateShoesModelProps } from '../models/create-shoes-model';
import { ShoesModelProps } from '../models/shoes-model';

export abstract class ShoesModelRepository {
  abstract create(data: CreateShoesModelProps): Promise<ShoesModelProps>;
  abstract save(shoesModel: ShoesModelProps): Promise<ShoesModelProps>;
  abstract remove(shoesModel: ShoesModelProps): Promise<void>;
  abstract findAll(): Promise<ShoesModelProps[]>;
  abstract findById(id: string): Promise<ShoesModelProps | null>;
  abstract findByReference(reference: string): Promise<ShoesModelProps | null>;
  abstract findAllWithFactories(): Promise<ShoesModelProps[]>;
}
