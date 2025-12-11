// IMPORTAMOS EL MODULO CLUSTER
import cluster from "cluster";
// IMPORTAMOS EL MODULO OS
import { cpus } from "os";

// HAGAMOS EL CONSOLE.LOG PARA VERIFICAR QUE PROCESO ES EL PRIMARIO
// console.log(cluster.isPrimary);

// HAGAMOS LOGS PARA SABER SI EL PROCESO ES EL PRIMARIO O NO
// if(cluster.isPrimary){
//     console.log(`soy el proceso primario ${process.pid}`)
//     cluster.fork();
// }else{
//     console.log(`soy el proceso secundario ${process.pid}`)
// }

// CREAREMOS UN WORKER POR CADA NUCLEO DEL CPU
if(cluster.isPrimary){
    console.log(`soy el proceso primario ${process.pid}`);
    for(let i =0; i<cpus().length; i++){
        cluster.fork();
    }
}else{
    console.log(`soy el proceso secundario ${process.pid}`);
}

// MANTENER VIVO EL CLUSTER Y REEMPLAZAR WORKERS CAIDOS
cluster.on('exit', ()=>{
    cluster.fork();
});

// OJO!!!
// EN WINDOWS EL MODULO CLUSTER NO FUNCIONA CORRECTAMENTE PORQUE
// LA MANERA EN QUE WINDOWS MANEJA LOS PROCESOS ES DISTINTA A UNIX/LINUX/MACOS
// ASI QUE SI PROBAMOS UN SERVIDOR CON WINDOWS, HABRA UN CLUSTER, PERO EL 
// PROCESO QUE GESTIONE TODAS LAS OPERACIONES SERA EL MISMO