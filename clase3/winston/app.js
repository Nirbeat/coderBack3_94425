import express, { json } from "express";
import { environment } from "./config.js";
import { login } from "./login.js";
import { loginErrorHandler } from "./customError.js";
import { addLogger } from "./winston.js";

const app = express();

app.use(json());
// AGREGAMOS NUESTRO LOGGER A LA APP
app.use(addLogger)

// VAMOS A REUTILIZAR LO QUE HABÍAMOS HECHO DE ERRORES PERSONALIZADOS
app.post('/api/user/login', async (req, res, next) => {
    const {user, password} = req.body;
    try {
        req.logger.http(`se ha ingresado al endpoint de login`);
        // EN LA RUTA HAREMOS EL LOG A NIVEL HTTP SI EL LOGIN FUE EXITOSO
        const data = login(user, password);
        res.json(data);
        } catch (error) {
            next(error);
        }
});

// MODIFICAREMOS EL HANDLER DE ERRORES PARA QUE DEVUELVA EL LOG DE LOGIN
app.use(loginErrorHandler);

app.listen(environment.PORT, () => {
    console.log(`aplicacion corriendo en puerto ${environment.PORT}`);
});