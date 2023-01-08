import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateEntities1673200387012 implements MigrationInterface {
    name = 'UpdateEntities1673200387012'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`photo_user_table\` (\`id\` int NOT NULL AUTO_INCREMENT, \`size\` varchar(255) NOT NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`photo_user_table\` ADD CONSTRAINT \`FK_7e89c75f6acee7806c379915dbd\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`photo_user_table\` DROP FOREIGN KEY \`FK_7e89c75f6acee7806c379915dbd\``);
        await queryRunner.query(`DROP TABLE \`photo_user_table\``);
    }

}
