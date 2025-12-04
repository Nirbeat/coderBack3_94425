//DICCIONARIO DE OBJETOS DE ERRORES DE LOGIN (CON OBJETOS)
export const ErrorDictionary = {
    EMPTY_PASSWORD: {
        message: "Ocurrio un problema con el password",
        cause: "Se esperaba una cadena de texto, se recibio undefined",
        code: -1,
        name: "EMPTY_PASSWORD"
    },
    EMPTY_USER: {
        message: "Ocurrio un problema con el user",
        cause: "Se esperaba una cadena de texto, se recibio undefined",
        code: -2,
        name: "EMPTY_USER"
    },
    WRONG_PASSWORD: {
        message: "Ocurrio un problema con el password",
        cause: "El password no coincide",
        code: 1,
        name: "WRONG_PASSWORD"
    },
    WRONG_USER: {
        message: "Ocurrio un problema con el usuario",
        cause: "El usuario no fue encontrado",
        code: 2,
        name: "WRONG_USER"
    }
}

export class CustomError extends Error {
    constructor({ message, cause, code, name }) {
        super(message, { cause });
        this.code = code;
        this.name = name;
    }
}

export function loginErrorHandler(err, req, res, next) {

    switch (err.code) {
        case -1:
            // MIENTRAS MÁS ESPECIFICO SEA LO QUE PASAMOS AL LOGGER, MEJOR
            req.logger.error(`ha ocurrido un error al loguearse ${err.name} - ${err.message} - ${err.cause}`);
            break;
        case -2:
            // PARA ESTE ERROR, VAMOS A PASAR EL ENDPOINT, VERBO, INFO DEL ERROR Y TIMESTAMP
            // revisar archivo errors.log para ver el resultado
            req.logger.error(`${req.url} - ${req.method} - ${err.name} - ${err.message} - ${err.cause} - ${new Date().toISOString()}`);
            break;
        case 1:
            console.log("ErrorHandler" ,err.name);
            break;
        case 2:
            console.log("ErrorHandler" ,err.name);
            break;
    }
}
