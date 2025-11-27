import e, { json } from "express";
import { environment } from "./config.js";
import { login, loginErrorHandler } from "./customError.js";
const app = e();

app.use(json());

app.post('/api/user/login', async (req, res, next) => {
    const {user, password} = req.body;
    
    // ATRAPAREMOS LOS ERRORES
        try {
            const data = login(user, password);
            res.json(data);
        } catch (error) {
            // PROPAGAMOS EL ERROR AL PROXIMO MIDDLEWARE
            next(error);
        }
});

// USAMOS UN MIDDLEWARE AL FINAL DE LA CADENA DE RUTAS PARA GESTIONAR ERRORES
app.use(loginErrorHandler);

app.listen(environment.PORT, () => {
    console.log(`aplicacion corriendo en puerto ${environment.PORT}`);
});