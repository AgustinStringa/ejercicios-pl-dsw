//Crear una función que reciba un array de palabras y una cadena e indique cuantas veces se encuentra la palabra en el array.

function containsWord(array, word) {
    let count = 0;
    array.forEach(element => {
        element === word ? count++ : null;
    });
    return count;
}


const arreglo = ["algo", "nuevo", "pálabra", "palabra", "asd", "algo", "palabra"];

console.log(containsWord(arreglo, "word"));
console.log(containsWord(arreglo, "palabra"));
console.log(containsWord(arreglo, "algo"));