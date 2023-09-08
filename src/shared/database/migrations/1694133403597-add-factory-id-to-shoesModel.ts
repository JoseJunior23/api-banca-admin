import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddFactoryIdToShoesModel1694133403597
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'shoes_models',
      new TableColumn({
        name: 'factory_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'shoes_models',
      new TableForeignKey({
        name: 'fk_factoryId_shoesModel',
        columnNames: ['factory_id'],
        referencedTableName: 'factories',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('shoes_models', 'fk_factoryId_shoesModel');
    await queryRunner.dropColumn('shoes_models', 'factory_id');
  }
}
