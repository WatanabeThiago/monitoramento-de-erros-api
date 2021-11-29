import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class TableErrors1637903355325 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'errors',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
            isGenerated: true,
          },
          {
            name: 'environment_id',
            type: 'int',
          },
          {
            name: 'project_id',
            type: 'int',
          },
          {
            name: 'body',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'message',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'ip',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'params',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'query',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'headers',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'user',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('errors');
  }
}
