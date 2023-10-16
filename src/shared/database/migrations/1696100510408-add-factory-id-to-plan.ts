import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddFactoryIdToPlan1696100510408 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'plans',
      new TableColumn({
        name: 'factory_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'plans',
      new TableForeignKey({
        name: 'fk_factoryId_plans',
        columnNames: ['factory_id'],
        referencedTableName: 'factories',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('plans', 'fk_factoryId_plans'),
      await queryRunner.dropColumn('plans', 'factory_id');
  }
}
