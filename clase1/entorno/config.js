import { config } from "dotenv";

config();

export const entorno ={
    PORT: process.env.PORT,
    DB_URL: process.env.DATABASE_URL
}