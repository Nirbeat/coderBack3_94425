//CREAMOS FUNCION listNumbers CON N ARGUMENTOS
//SI SE PASA ARGUMENTO NO NUMERICO, DA ERROR POR CONSOLA MOSTRANDO EL TIPO DE DATO DE LOS ARGUMENTOS
//ESCAPAR DEL PROCESO CON -4
//OBTENER CODIGO DE ESCAPE CON UN LISTENER Y MENSAJE POOR CONSOLA =>
//"Proceso finalizado por argumentación inválida en una función"

function listNumbers(...numbers) {
    const validTypes = numbers.every((argument) => typeof argument == "number")

    if (!validTypes) {
        console.log("invalid arguments")
        process.exit(-4)
    }
}

process.on('exit', exitCode => {
    if (exitCode == -4) console.log("Proceso finalizado por argumentación inválida en una función")
    else if (exitCode == 0) console.log("proceso finalizado sin problemas")
})
//VERSION CON EXIT DIRECTO

//------------------------------------------------------------------------------------------------------------------
////VERSION CON UNCAUGHTEXCEPTION
// function listNumbers(...numbers){
//     const types = numbers.every((arg)=>{
//         return typeof arg === "number"
//     })

//     if(!types){
//         const typesArr = numbers.map(args=> typeof args);
//         throw new Error("invalid arguments", {cause: typesArr});
//     }
// }

// process.on('uncaughtException', exception=>{
//     process.exitCode = -4;
// })

// process.on('exit', exitCode=>{
//     if(exitCode == -4){
//         console.log({
//             message:"Proceso finalizado por argumentación inválida en una función",
//             exitCode
//         })
//     }
// })


listNumbers(1, 2, 3)