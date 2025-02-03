import { DB_HOST, DB_PORT, DB_USERNAME, DB_NAME, DB_PASSWORD, LANGSMITH_TRACING } from "./envs";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    //sin dropSchema, se guardan las solicitudes http sin importar si 
    //cierro y abro el servidor
    // dropSchema: true,
    synchronize: true,
    logging: ['error'],
    entities: [],
    subscribers: [],
    migrations: [],
})