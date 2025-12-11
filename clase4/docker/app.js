// COMANDOS PARA CREAR IMAGEN DE DOCKER
// docker build -t <nombre de la imagen> <ruta, suele ponerse un punto solamente>
// COMANDO PARA CORRER LA IMAGEN CREADA
// docker run -d -p <puerto de mi app>:<puerto de la maquina virtual> <nombre de la imagen>
import express from "express";
// IMPORTAMOS LA FUNCION DE OPERACION COMPLEJA Y EL CLUSTER
import { operacionCompleja } from "./operacionCompleja.js";
import {} from "./cluster.js";

// A PESAR DE TENER LOS CLUSTERS, NO VA A FUNCIONAR COMO SE ESPERA PORQUE
// INCLUSO EN EL CONTEXTO DE UNA MÁQUINA VIRTUAL, EN WINDOWS NO SE HACE
// UN REPARTO DE CARGA AUTOMÁTICO
const app = express();

// RETOMAMOS NUESTRA OPERACION COMPLEJA DE CLASE 1
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