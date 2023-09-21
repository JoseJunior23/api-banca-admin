import { Profession } from '../../typeorm/entities/profession.entity';

export class ProfessionViewModel {
  static toHTTP(profession: Profession) {
    return {
      professionId: profession.id,
      name: profession.name,
      description: profession.description,
    };
  }
}
