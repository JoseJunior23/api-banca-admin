import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddShoesModelIdToPlanDetail1694476502505
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'plan_details',
      new TableColumn({
        name: 'shoes_model_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'plan_details',
      new TableForeignKey({
        name: 'fk_plan_details_shoes_model',
        columnNames: ['shoes_model_id'],
        referencedTableName: 'shoes_models',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'plan_details',
      'fk_plan_details_shoes_model',
    ),
      await queryRunner.dropColumn('plan_details', 'shoes_model_id');
  }
}
