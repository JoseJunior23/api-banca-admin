import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePlanDetail1691541523206 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'plan_details',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'entry_date',
            type: 'Date',
          },
          {
            name: 'departure_date',
            type: 'Date',
          },
          {
            name: 'production_sheet',
            type: 'Decimal',
          },
          {
            name: 'number_pairs',
            type: 'int',
          },
          {
            name: 'billed',
            type: 'varchar',
          },
          {
            name: 'billed_date',
            type: 'Date',
          },
          {
            name: 'payment_date',
            type: 'Date',
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('plan_details');
  }
}
