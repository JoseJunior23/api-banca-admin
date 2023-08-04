import { CreateFactoryProps } from '../models/create-factory.model';
import { FactoryProps } from '../models/factory.model';

export abstract class FactoryRepository {
  abstract create(data: CreateFactoryProps): Promise<FactoryProps>;
  abstract save(factory: FactoryProps): Promise<FactoryProps>;
  abstract remove(factory: FactoryProps): Promise<void>;
  abstract findByName(name: string): Promise<FactoryProps | null>;
  abstract findById(id: string): Promise<FactoryProps | null>;
  abstract findAll(): Promise<FactoryProps[]>;
}
