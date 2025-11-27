// IMPORTAMOS FAKER
import { faker } from "@faker-js/faker";
// CREAMOS FUNCION PARA GENERAR PRODUCTOS
function generateProducts(){

    const product={
        _id : faker.database.mongodbObjectId(),
        precio: faker.commerce.price(),
        nombre: faker.commerce.productName(),
        descripcion: faker.commerce.productDescription(),
        // PUEDE RECIBIR UN OBEJTO CON MAXIMOS Y MINIMOS PARA QUE LOS NUMEROS
        // SE AJUSTEN A UN RANGO
        stock: faker.number.int({min: 3, max:10})
    }

    return product;
}
// CREAMOS FUNCION PARA GENERAR USUARIOS CON PRODUCTOS
export function generateUsers(){

    const randomNumber = faker.number.int({min: 1, max: 10});
    const carrito= [];

    for(let i = 0; i<randomNumber; i++){
        carrito.push(generateProducts())
    }
    // DEFINIMOS POSIBLES ROLES DE USUARIO
    // ESTE OBJETO SE TRANSFORMARÁ EN UN ENUM
    // EN OTROS LENGUAJES, UN ENUM ES UNA SERIE DE DATOS ADMITIDOS, SIENDO IGNORADOS
    // Y DANDO ERRORES SI SE PASAN VALORES DISTINTOS
    // EN JS NO EXISTEN, PERO ES IMPORTANTE QUE CONOZCAN EL CONCEPTO PARA EL DIA
    // QUE PASEN A OTROS LENGUAJES QUE SÍ LOS TENGAN, ASI QUE PARA DEFINIR UN ENUM
    // HAREMOS ESTE OBJETO QUE ES LO MAS PARECIDO QUE PODREMOS HACER EN JS
    const roles = {
        user: "user", 
        admin:"admin",
        vendedor: "vendedor"
    }
    const user = {
        _id: faker.database.mongodbObjectId(),
        // ENUMVALUE GENERA PROPIEDADES DEFINIDAS A TRAVES DE UN OBJETO Y LAS RANDOMIZA
        // EN ESTE CASO, ROLES DE USUARIO
        role: faker.helpers.enumValue(roles),
        nombre: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        // A FECHA DE NACIMIENTO SE LE PUEDE PASAR UNA FECHA DE REFERENCIA
        // ESA FECHA DE REFERENCIA SERÁ LA MÁS ANTIGUA ADMITIDA
        fechaNac: faker.date.birthdate(),
        // SI DEFINO UNA PROPIEDAD DE UN OBJETO SIN SU VALOR, JS BUSCA UNA VARIABLE DE
        // ESE NOMBRE Y ASIGNA AUTOMATICAMENTE LA PROPIEDAD CON ESE NOMBRE Y EL VALOR
        // DE LA VARIABLE
        // EN ESTE CASO, PONER SOLO carrito ES LO MISMO QUE PONER carrito:carrito
        carrito
    }

    return user;
}