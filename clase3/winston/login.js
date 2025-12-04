import { ErrorDictionary, CustomError } from "./customError.js";

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