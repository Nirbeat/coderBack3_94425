//DICCIONARIO DE OBJETOS DE ERRORES DE LOGIN (CON OBJETOS)
const ErrorDictionary = {
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
//CLASE DE ERRORES PERSONALIZADOS (CON HERENCIA)
//LA VENTAJA DE HACERLO ASI ES QUE PUEDEN PASARSE OBJETOS CON LA CANTIDAD DE
// PROPIEDADES QUE NECESITEN (CODIGOS DE RESPUESTA, POR EJEMPLO)
class CustomError extends Error {
    constructor({ message, cause, code, name }) {
        super(message, { cause });
        this.code = code;
        this.name = name;
    }
}
//TRAER FUNCION DE LOGIN Y EJECUTAR LOS ERRORES PERSONALIZADOS
export function login(user, password) {
    if (password == "") {
        throw new CustomError(ErrorDictionary.EMPTY_PASSWORD);
    }
    if (user == "") {
        throw new CustomError(ErrorDictionary.EMPTY_USER);
    }
    if (password != "password") {
        throw new CustomError(ErrorDictionary.WRONG_PASSWORD);
    }
    if (user != "user") {
        throw new CustomError(ErrorDictionary.WRONG_USER);
    }
    if (password == "password" && user == "user") {
        console.log("se ha logueado exitosamente");
        return 0;
    }
}

// MIDDLEWARE PARA MANEJAR ERRORES

export function loginErrorHandler(err, req, res, next) {

    // INTERCEPTAMOS LOS ERRORES POR SU CÓDIGO
    switch (err.code) {
        // PARA CUALQUIER CASO, SE PUEDE USAR LA LOGICA QUE SEA NECESARIA
        case -1:
            console.log(err.name);
            break;
        case -2:
            console.log(err.name);
            break;
        case 1:
            console.log(err.name);
            break;
        case 2:
            console.log(err.name);
            break;
    }
}
