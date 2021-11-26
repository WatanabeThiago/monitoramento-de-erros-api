import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class addSameFieldsToError1637893550552
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.
    await queryRunner.addColumns('errors', [
      new TableColumn({
        name: 'name ',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'stack',
        type: 'varchar',
        isNullable: true,
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
