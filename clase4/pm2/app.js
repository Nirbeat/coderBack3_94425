// INSTALAMOS PM2 COMO GLOBAL
// npm install pm2 -g

// PODEMOS EJECUTAR NUESTRA APLICACION
// pm2 start <fichero de inicio>

// PODEMOS INICIAR VARIAS INSTANCIAS DE LA APP
// pm2 start <fichero de inicio> -i max

// PARA DETENER LAS INSTANCIAS
// pm2 stop <nombre de la app o id>

// PARA BORRAR LA LISTA DE APPS
// pm2 delete <nombre de la app o id>
import express from "express";
import { operacionCompleja } from "./operacionCompleja.js";

const app = express();

// RETOMAMOS NUESTRA OPERACION COMOPLEJA DE CLASE 1
app.get('/operacion-compleja', async (req, res) => {
    
    console.log(`Proceso ${process.pid} manejando la solicitud a la operacion compleja`);
    const result = operacionCompleja();
    
    res.send(`resultado: ${result}`);
});

app.get('/saludo', async (req, res) => {
    console.log(`Proceso ${process.pid} manejando la solicitud al saludo`);
    res.send('hola')
});

app.listen(3000, () => console.log('server up'));