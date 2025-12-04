import { faker } from "@faker-js/faker";

function generateProducts(){

    const product={
        _id : faker.database.mongodbObjectId(),
        precio: faker.commerce.price(),
        nombre: faker.commerce.productName(),
        descripcion: faker.commerce.productDescription(),
        stock: faker.number.int({min: 3, max:10})
    }

    return product;
}

export function generateUsers(){

    const randomNumber = faker.number.int({min: 1, max: 10});
    const carrito= [];

    for(let i = 0; i<randomNumber; i++){
        carrito.push(generateProducts())
    }
    const roles = {
        user: "user", 
        admin:"admin",
        vendedor: "vendedor"
    }
    const user = {
        _id: faker.database.mongodbObjectId(),
        role: faker.helpers.enumValue(roles),
        nombre: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        fechaNac: faker.date.birthdate(),
        carrito
    }

    return user;
}