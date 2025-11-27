import { config } from 'dotenv'

config();

export const environment = {
    PORT : process.env.PORT,
    DB_URL: process.env.DB_URL
}