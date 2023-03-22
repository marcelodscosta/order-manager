import { DataSource } from "typeorm";
import 'dotenv/config';

const PORT = process.env.DB_PORT as number | undefined;

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [`${__dirname}/**/entities/*.{ts, js}`],
    migrations: [`${__dirname}/**/migrations/*.{ts, js}`]
});