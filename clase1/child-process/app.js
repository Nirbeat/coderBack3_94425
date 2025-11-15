import express from "express";
import {fork} from 'child_process'

const app = express();

app.get('/operacion-compleja', async (req, res) => {
    const child = fork('./operacionCompleja.js')
    child.send('operacion')
    child.on('message', message=>{
        res.send(message)
    })
});

app.get('/saludo', async (req, res) => {
    res.send('hola')
});

app.listen(8080, () => console.log('server up'));