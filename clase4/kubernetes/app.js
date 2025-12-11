// MAPA DE FUNCIONES DE LO QUE ESTAMOS USANDO
// minikube → simula un nodo (servidor) o varios dentro de tu PC
// Kubernetes → orquesta el cluster y corre Pods en esos nodos
// kubectl → "control remoto" para hablar con Kubernetes

// DESPUES DE INSTALAR TODO, INICIAMOS MINIKUBE
// ESPECIFICANDO LA VERSION PARA TENER ASI UNA ESTABLE
// minikube start --kubernetes-version=v1.30.0
// SE PUEDE AGREGAR LA FLAG --nodes=<cantidad de maquinas que quiero>
// PARA TENER MÚLTIPLES MAQUINAS VIRTUALES

// COMPROBAMOS ESTADO DEL CLUSTER
// minikube status

// PARA VER LOS NODOS DEL CLUSTER
// kubectl get nodes

// DATA DEL CLUSTER
// kubectl cluster-info

// HASTA ACÁ, TODO LO QUE SE HACE ES UNA REDUNDANCIA LEVANTANDO UNA UNICA MAQUINA 
// VIRTUAL PARA EJECUTAR CONTENEDORES
// PARA TENER MAS INSTANCIAS, DEBEMOS CONTENEDORES CON UN ARCHIVO DE CONFIGURACION

// PRIMERO HAY QUE DECIRLE A KUBERNETES EN BASE A QUE IMAGEN DE DOCKER QUEREMOS
// HACER NUESTROS CONTENEDORES
// SI LA IMAGEN ESTA EN DOCKER HUB NO HACE FALTA CARGARLA Y LA BUSCARA 
// EN LA NUBE SI PUSIMOS EN LA ULTIMA OPCION "Always"

// PARA PODER CARGAR DESDE LOCAL UNA IMAGEN, KUBERNETES NO LA VA PODER LEER
// DE MANERA AUTOMATICA, ASI QUE HAY QUE CARGARLA DE LA SIGUIENTE MANERA
// minikube image load <nombre de la imagen>

// CONFIRMAMOS QUE SE HAYA CARGADO LA IMAGEN
// minikube image list

// SI HAY PROBLEMAS CON LA CARGA, PODEMOS CONSTRUIRLA DIRECTAMENTE EN NUESTRAS
// MAQUINAS VIRTUALES CON UNA SINTAXIS SIMILAR A LA QUE USAMOS PARA DOCKER
// minikube image build -t <nombrede la imagen> <ruta, si es la misma se pone un punto>

// CON EL ARCHIVO HECHO, EJECUTAR
// kubectl apply -f <archivo de configuracion>

// UNA VEZ LANZADO EL CLUSTER, CONSULTAR EL ESTADO DE LOS DESPLIEGUES
// kubectl get deployments

// PARA VER ESTADO DE LOS PODS
// kubectl get pods

// PARA VER LOS SERVICIOS
// kubectl get services

// PARA INICIAR EL SERVICIO, PRIMERO CONSULTAR
// minikube service list
// LUEGO EJECUTARLO POR EL NOMBRE
// minikube service <nombre del servicio>

// PARA ELIMINAR EL CLUSTER
// kubectl delete deployment <nombre del despliegue>

import express from "express";
import { operacionCompleja } from "./operacionCompleja.js";
import {} from "./cluster.js";

const app = express();

// RETOMAMOS NUESTRA OPERACION COMOPLEJA DE CLASE 1
app.get('/operacion-compleja', async (req, res) => {
    
    console.log(`Proceso ${process.pid} manejando la solicitud a la operacion compleja`);
    const result = operacionCompleja();
    
    res.send(`resultado: ${result}`);
});

app.get('/saludo', async (req, res) => {
    console.log(`Proceso ${process.pid} manejando la solicitud al saludo`);
    res.send('hola')
});

app.listen(3000, () => console.log('server up'));