import { MigrationInterface, QueryRunner } from "typeorm";

export class default1680972378271 implements MigrationInterface {
    name = 'default1680972378271'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`customers\` DROP COLUMN \`cpf\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`customers\` ADD \`cpf\` varchar(200) NULL`);
    }

}
