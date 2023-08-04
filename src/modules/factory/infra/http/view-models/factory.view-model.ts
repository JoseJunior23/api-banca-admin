import { Factory } from '../../typeorm/entities/factory.entity';

export class FactoryViewModel {
  static toHTTP(factory: Factory) {
    return {
      factoryId: factory.id,
      companyName: factory.companyName,
      phone: factory.phone,
    };
  }
}
