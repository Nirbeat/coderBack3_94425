import e from "express";
import { environment } from "./config.js";
import { generateUsers } from "./faker.js";

const app = e();

// DEVOLVEMOS 100 USUARIOS MOCKEADOS CON FAKER
app.get('/api/users', async (req,res) => {
    // DECLARAMOS NUESTRO ARRAY DE USUARIOS
    const users = [];

    // LLENAMOS NUESTRO ARRAY CON 100 REGISTROS
    for(let i = 0; i<100; i++){
        users.push(generateUsers());
    }

    res.json(users);
})

app.listen(environment.PORT, ()=> {
    console.log(`aplicacion corriendo en puerto ${environment.PORT}`)
})