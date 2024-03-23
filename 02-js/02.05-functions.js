function description(name, age) {
    return (`your name is ${name} and your age is ${age}`)
}

console.log(description("agus", "21"));
console.log(description("agus", "21", "99", "juan")); //ignora parametros adicionales
console.log(description("agus")); // si no se envia el parametro => undefined. NO DA ERROR


