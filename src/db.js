import { createPool } from "mysql2/promise";
import { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } from "./config.js";

console.log('Connection settings:', { //<-- Debug Stuff if not working
    host: DB_HOST,
    user: DB_USER,
    database: DB_NAME,
    port: DB_PORT
  });

export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT,
});