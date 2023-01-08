import { MigrationInterface, QueryRunner } from "typeorm"

export class DeleteTables1673199849243 implements MigrationInterface {
    private async deleteTables(queryRunner: QueryRunner) {
        await queryRunner.dropTable('user_entity');
        await queryRunner.dropTable('my_migrations_table');
    }

    public async up(queryRunner: QueryRunner): Promise<void> {
        await this.deleteTables(queryRunner);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await this.deleteTables(queryRunner);
    }

}
