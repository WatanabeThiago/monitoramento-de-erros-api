import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class addFieldsToError1637893173770
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('errors', [
      new TableColumn({
        name: 'url',
        type: 'varchar',
      }),
      new TableColumn({
        name: 'code',
        type: 'int2',
      }),
      new TableColumn({
        name: 'method',
        type: 'varchar',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
