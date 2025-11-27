import e from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = e();
// UN PROXY INVERSO ES UN SERVIDOR QUE ESTÁ HACIENDOSE CARGO DE LAS PETICIONES QUE
// DEBERÍAN LLEGAR A OTRO SERVIDOR

// EN ESTE CASO, NUESTRO SERVIDOR SE HACE CARGO DE LAS PETICIONES QUE HAGAMOS A
// JSONPLACEHOLDER, Y RESPONDE COMO SI FUERA EL PROPIETARIO DE LA INFO QUE MUESTRA

// ESTA UTILIZACIÓN ES DE PROXY INVERSO COMO MIDDLEWARE, PERO HAY USOS MAS POTENTES
// QUE YA VEREMOS SI HAY TIEMPO
app.use("/api", createProxyMiddleware({
    target: "https://jsonplaceholder.typicode.com",
    changeOrigin: true,
    pathRewrite:{
        "^/api":""
    }
}));

app.listen(3000, ()=> console.log("escuchando en puerto 3000"));