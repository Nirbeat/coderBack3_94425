import {Command} from 'commander'
import { config } from 'dotenv'

const program = new Command();

program
.option("--mode <mode>", "modo de trabajo")

program.parse()

const argumentos = program.opts()

if(argumentos.mode == "development") config({path: ".env.dev"})
if(argumentos.mode == "production") config({path: ".env.prod"})

export const PORT = process.env.PORT