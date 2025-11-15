import e from "express";
import { entorno } from "./config.js";

const app = e();

app.listen(entorno.PORT, ()=> console.log(`aplicacion corriendo en ${entorno.PORT}`))
