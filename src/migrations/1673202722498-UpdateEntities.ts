import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateEntities1673202722498 implements MigrationInterface {
    name = 'UpdateEntities1673202722498'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`rent_car_user_table\` (\`rentId\` int NOT NULL AUTO_INCREMENT, \`dateCreated\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`userId\` int NULL, \`carId\` int NULL, PRIMARY KEY (\`rentId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`rent_car_user_table\` ADD CONSTRAINT \`FK_9404f058a003da7963bd2990786\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rent_car_user_table\` ADD CONSTRAINT \`FK_2126345447e96e6e2e69629d0cc\` FOREIGN KEY (\`carId\`) REFERENCES \`car\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rent_car_user_table\` DROP FOREIGN KEY \`FK_2126345447e96e6e2e69629d0cc\``);
        await queryRunner.query(`ALTER TABLE \`rent_car_user_table\` DROP FOREIGN KEY \`FK_9404f058a003da7963bd2990786\``);
        await queryRunner.query(`DROP TABLE \`rent_car_user_table\``);
    }

}
