import { config } from 'dotenv'

config({quiet:true});

export const environment = {
    PORT : process.env.PORT,
    DB_URL: process.env.DB_URL
}

