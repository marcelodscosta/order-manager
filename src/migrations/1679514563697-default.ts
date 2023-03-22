import { MigrationInterface, QueryRunner } from "typeorm";

export class default1679514563697 implements MigrationInterface {
    name = 'default1679514563697'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`products_orders\` (\`products_id\` int NOT NULL, \`orders_id\` int NOT NULL, INDEX \`IDX_009bc98fcfc21c535d7b8f527a\` (\`products_id\`), INDEX \`IDX_74d7f0c757bff5e862b4225115\` (\`orders_id\`), PRIMARY KEY (\`products_id\`, \`orders_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`products_orders\` ADD CONSTRAINT \`FK_009bc98fcfc21c535d7b8f527a6\` FOREIGN KEY (\`products_id\`) REFERENCES \`orders\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`products_orders\` ADD CONSTRAINT \`FK_74d7f0c757bff5e862b42251150\` FOREIGN KEY (\`orders_id\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products_orders\` DROP FOREIGN KEY \`FK_74d7f0c757bff5e862b42251150\``);
        await queryRunner.query(`ALTER TABLE \`products_orders\` DROP FOREIGN KEY \`FK_009bc98fcfc21c535d7b8f527a6\``);
        await queryRunner.query(`DROP INDEX \`IDX_74d7f0c757bff5e862b4225115\` ON \`products_orders\``);
        await queryRunner.query(`DROP INDEX \`IDX_009bc98fcfc21c535d7b8f527a\` ON \`products_orders\``);
        await queryRunner.query(`DROP TABLE \`products_orders\``);
    }

}
