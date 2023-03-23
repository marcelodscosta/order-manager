import { MigrationInterface, QueryRunner } from "typeorm";

export class default1679591011162 implements MigrationInterface {
    name = 'default1679591011162'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`customers\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`customers\` ADD \`cpf\` varchar(200) NULL`);
        await queryRunner.query(`ALTER TABLE \`customers\` ADD \`cnpj\` varchar(200) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`customers\` DROP COLUMN \`cnpj\``);
        await queryRunner.query(`ALTER TABLE \`customers\` DROP COLUMN \`cpf\``);
        await queryRunner.query(`ALTER TABLE \`customers\` ADD \`password\` varchar(200) NOT NULL`);
    }

}
