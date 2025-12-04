// ARTILLERY USA CLI PARA EJECUTARSE
// UN COMANDO BÁSICO TIENE LA SIGUIENTE SINTAXIS:
//      artillery quick --count <usuarios> --num <peticiones> "<url>" -o <archivo de reporte>

// SE PUEDE GENERAR UN ARCHIVO DE CONFIGURACION YML PARA ESPECIFICARLE A ARTILLERY EL TEST QUE SE
// QUIERE EJECUTAR:
//      artillery run <archivo yml> -o <archivo de reporte>

// SE PUEDE GENERAR UN REPORTE VISUAL EN HTML:
//      artillery report <archivo de reporte> -o <archivo html>

import express, { json } from "express";
import { generateUsers } from "./faker.js";

const app = express();
app.use(json());

// REUTILIZAMOS NUESTRA OPERACION COMPLEJA DE CLASE 1 PARA TESTEAR POR CLI
// PRUEBEN GOLPEAR ESTE ENDPOINT CON ARTILLERY USANDO EL PRIMER COMANDO CITADO ARRIBA
// PARA VER LA DIFERENCIA ENTRE LA RESPUESTA DE UNA OPERACION SIMPLE Y UNA COMPLEJA
app.get('/operacion-compleja', async (req, res) => {
      let result = 0;

    for (let i = 0; i < 5e9; i++) {
        result++;
    }

    res.send(result);
});

app.get('/operacion-simple', async (req, res) => {
    let result = 0;

    for (let i = 0; i < 1000; i++) {
        result++;
    }

    res.send(result);
});

// CON ESTOS ENDPOINTS PROBAMOS UN FLUJO CREADO DESDE UN ARCHIVO
// PARA NO USAR DB, GUARDAREMOS EN UN ARRAY LOS USUARIOS

const users = []

// CONSULTAMOS ENDPOINT DE USUARIOS FAKER
app.get('/user/faker', async(req, res, next)=> {
    res.json(generateUsers());
})

// CON EL USUARIO DE FAKER, PROBAMOS REGISTRO
app.post('/user/register', async(req, res, next)=> {
    const {body} = req;
    users.push(body);
    res.json(body);
});

// CON EL USUARIO DE FAKER REGISTRADO, PROBAMOS INICIO DE SESION
app.post('/user/login', async(req, res, next)=> {
    const {email, password} = req.body;

    users.forEach(user=>{
        if(user.email = email && user.password == password){
            res.status(200).json({message: "login exitoso"});
        }else{
            res.status(400).json({message: "Login rechazado"});
        }
    });
    
});
app.listen(3000, () => console.log('server up'));