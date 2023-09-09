import { ShoesModel } from '../../typeorm/entities/shoes-model.entity';

export class ShoesModelViewModel {
  static toHTTP(shoesModel: ShoesModel) {
    const factoryName = shoesModel.factory
      ? shoesModel.factory.companyName
      : null;
    return {
      shoesModelId: shoesModel.id,
      reference: shoesModel.reference,
      description: shoesModel.description,
      pricePairsShoes: shoesModel.pricePairsShoes,
      pricePespontador: shoesModel.pricePespontador,
      priceColadeira: shoesModel.priceColadeira,
      factory: factoryName,
    };
  }
}
