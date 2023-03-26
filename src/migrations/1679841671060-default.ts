import { MigrationInterface, QueryRunner } from "typeorm";

export class default1679841671060 implements MigrationInterface {
    name = 'default1679841671060'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`isAdmin\` \`password\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`password\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`password\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`password\` \`isAdmin\` tinyint NOT NULL`);
    }

}
