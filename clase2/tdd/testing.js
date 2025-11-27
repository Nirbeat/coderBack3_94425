// DATOS CORRECTOS
// user = "user"
// password = "password"

//desarrolla la funcion bajo TDD
function login(user, password) {
    if(password == ""){
        console.log("No se ha proporcionado un password");
        return -1;
    }
    if(user == ""){
        console.log("No se ha proporcionado un usuario");
        return -2;
    }
    if(password != "password"){
        console.log("se ha pasado un password incorrecto");
        return 1;
    }
    if(user != "user"){
        console.log("credenciales incorrectas");
        return 2;
    }
    if(password == "password" && user == "user"){
        console.log("se ha logueado exitosamente");
        return 0;
    }
}

// DEFINIR VARIABLES DE TESTS A PASAR Y PASADOS
const testTotales = 5;
let testPasados = 0;
// EVALUAR TODOS LOS CASOS:
// Si se pasa un password vacío, la función debe consologuear (“No se ha proporcionado un password”) y retornar codigo -1
const test1 = login("user", "");

if(test1 == -1){
    console.log("se ha pasado el test 1");
    testPasados++;
}else{
    console.log("el test 1 no ha pasado");
}
// Si se pasa un usuario vacío, la función debe consologuear (“No se ha proporcionado un usuario”) y retornar codigo -2
const test2 = login("", "password");

if(test2 == -2){
    console.log("se ha pasado el test 2");
    testPasados++;
}else{
    console.log("el test 2 no ha pasado");
}
// Si se pasa un password incorrecto, consologuear (“Contraseña incorrecta”) y retornar codigo 1
const test3 = login("user", "asdasdasd");

if(test3 == 1){
    console.log("se ha pasado el test 3");
    testPasados++;
}else{
    console.log("el test 3 no ha pasado");
}
// Si se pasa un usuario incorrecto, consologuear (“Credenciales incorrectas”) y retornar codigo 2
const test4 = login("asdasdasd", "password");

if(test4 == 2){
    console.log("se ha pasado el test 4");
    testPasados++;
}else{
    console.log("el test 4 no ha pasado");
}
// Si  el usuario y contraseña coinciden, consologuear (“logueado”) y retornar codigo 0
const test5 = login("user", "password");

if(test5 == 0){
    console.log("se ha pasado el test 5");
    testPasados++;
}else{
    console.log("el test 5 no ha pasado");
}
// NOTIFICAR CUANTOS TEST HAN PASADO
if(testPasados == testTotales){
    console.log("se han pasado todos los test");
}else{
    console.log(`se han pasado ${testPasados} test de ${testTotales}`)
}