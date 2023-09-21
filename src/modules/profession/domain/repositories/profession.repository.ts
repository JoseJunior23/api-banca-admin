import { CreateProfessionProps } from '../models/create-profession.model';
import { ProfessionProps } from '../models/profession.model';

export abstract class ProfessionRepository {
  abstract create(data: CreateProfessionProps): Promise<ProfessionProps>;
  abstract save(factory: ProfessionProps): Promise<ProfessionProps>;
  abstract remove(factory: ProfessionProps): Promise<void>;
  abstract findByName(name: string): Promise<ProfessionProps | null>;
  abstract findById(id: string): Promise<ProfessionProps | null>;
  abstract findAll(): Promise<ProfessionProps[]>;
}
