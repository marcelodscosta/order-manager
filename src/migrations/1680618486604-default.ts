import { MigrationInterface, QueryRunner } from "typeorm";

export class default1680618486604 implements MigrationInterface {
    name = 'default1680618486604'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`customers\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(200) NOT NULL, \`email\` varchar(200) NOT NULL, \`status\` tinyint NOT NULL, \`cpf\` varchar(200) NULL, \`cnpj\` varchar(200) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(200) NOT NULL, \`cpf\` varchar(200) NULL, \`email\` varchar(200) NOT NULL, \`password\` varchar(255) NOT NULL, \`status\` tinyint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`orders\` (\`id\` int NOT NULL AUTO_INCREMENT, \`date\` date NOT NULL, \`status\` tinyint NOT NULL, \`user_id\` int NULL, \`customer_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`products\` (\`id\` int NOT NULL AUTO_INCREMENT, \`description\` varchar(200) NOT NULL, \`price\` int NOT NULL, \`categories_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`categories\` (\`id\` int NOT NULL AUTO_INCREMENT, \`description\` varchar(200) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`products_orders\` (\`products_id\` int NOT NULL, \`orders_id\` int NOT NULL, INDEX \`IDX_009bc98fcfc21c535d7b8f527a\` (\`products_id\`), INDEX \`IDX_74d7f0c757bff5e862b4225115\` (\`orders_id\`), PRIMARY KEY (\`products_id\`, \`orders_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`orders\` ADD CONSTRAINT \`FK_a922b820eeef29ac1c6800e826a\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`orders\` ADD CONSTRAINT \`FK_772d0ce0473ac2ccfa26060dbe9\` FOREIGN KEY (\`customer_id\`) REFERENCES \`customers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD CONSTRAINT \`FK_0caaab91b663757a4086208d0b0\` FOREIGN KEY (\`categories_id\`) REFERENCES \`categories\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`products_orders\` ADD CONSTRAINT \`FK_009bc98fcfc21c535d7b8f527a6\` FOREIGN KEY (\`products_id\`) REFERENCES \`orders\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`products_orders\` ADD CONSTRAINT \`FK_74d7f0c757bff5e862b42251150\` FOREIGN KEY (\`orders_id\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products_orders\` DROP FOREIGN KEY \`FK_74d7f0c757bff5e862b42251150\``);
        await queryRunner.query(`ALTER TABLE \`products_orders\` DROP FOREIGN KEY \`FK_009bc98fcfc21c535d7b8f527a6\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_0caaab91b663757a4086208d0b0\``);
        await queryRunner.query(`ALTER TABLE \`orders\` DROP FOREIGN KEY \`FK_772d0ce0473ac2ccfa26060dbe9\``);
        await queryRunner.query(`ALTER TABLE \`orders\` DROP FOREIGN KEY \`FK_a922b820eeef29ac1c6800e826a\``);
        await queryRunner.query(`DROP INDEX \`IDX_74d7f0c757bff5e862b4225115\` ON \`products_orders\``);
        await queryRunner.query(`DROP INDEX \`IDX_009bc98fcfc21c535d7b8f527a\` ON \`products_orders\``);
        await queryRunner.query(`DROP TABLE \`products_orders\``);
        await queryRunner.query(`DROP TABLE \`categories\``);
        await queryRunner.query(`DROP TABLE \`products\``);
        await queryRunner.query(`DROP TABLE \`orders\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`customers\``);
    }

}
