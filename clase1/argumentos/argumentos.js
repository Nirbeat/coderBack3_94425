// //LECTURA DE ARGUMENTOS
// //SE USA SLICE PARA LIMPIARO LOS DOS PRIMEROS DEL PROCESO PRINCIPAL
// console.log(process.argv.slice(2))

//EJEMPLO DE COMO DISCRIMINAR UNA FLAG DE UN COMANDO
//SE EVALUA PRIMER CARACTER DEL STRING PASADO COMO PRIMER ARGUMENTO ='-'
if(process.argv.slice(2)[0][0] == "-"){
    console.log("es una flag")
}
else{
    console.log("es un comando")
}