import { Command } from 'commander';

const program = new Command();

// EJEMPLO DE LA DIAPOSITIVA
// program
//     .option("-d", "Variable para debug", false)
//     .option("-p <port>", "puerto de escucha", 8080)
//     .option("--m <mode>", "modo de trabajo", "desarrollo")
//     .requiredOption("-u <user>", "usuario en uso del programa", "mensaje de error por falta de argumento")
//     .option("-l, --l [letters...]", "multiples cadenas de texto")
    
// //SIN EL PARSE NO ANDA COMMANDER    
//     program.parse()
// //CON ESTE METODO SE ACCEDE A LOS OBJETOS
//     console.log(program.opts())

// -----------------------------------------------------------------------------------------------
// EJEMPLO DE COMO FUNCIONA GIT USANDO SUBCOMANDOS
program
    .command("commit")
    .option("-a", "agrega archivos al commit", false)
    .option("-m <mensaje>", "mensaje del commit")
    .action(({a, m})=>{
        if(a) console.log("guardo los archivos modificados")
        if(m) console.log(m)
    })

program.parse()