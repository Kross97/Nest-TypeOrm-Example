import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateEntities1673199306300 implements MigrationInterface {
    name = 'UpdateEntities1673199306300'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`age\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`car\` (\`id\` int NOT NULL AUTO_INCREMENT, \`mark\` varchar(255) NOT NULL, \`age\` int NOT NULL, \`userId\` int NULL, UNIQUE INDEX \`REL_a4f3cb1b950608959ba75e8df3\` (\`userId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`car\` ADD CONSTRAINT \`FK_a4f3cb1b950608959ba75e8df36\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`car\` DROP FOREIGN KEY \`FK_a4f3cb1b950608959ba75e8df36\``);
        await queryRunner.query(`DROP INDEX \`REL_a4f3cb1b950608959ba75e8df3\` ON \`car\``);
        await queryRunner.query(`DROP TABLE \`car\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
