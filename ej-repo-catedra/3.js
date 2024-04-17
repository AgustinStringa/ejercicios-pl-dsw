/**
 * Crear una función que reciba 2 parámetros: 
 * un array con valores de múltiples tipos 
 * y una cadena indicando el tipo (boolean, number, string, object, function, etc) 
 * y devuelva un nuevo array sólo con los elementos de ese tipo
 */

function filterTypes(array, stringType) {
    return array.filter((el) => typeof (el) === stringType && el != null);
}

console.log(typeof (typeof (123))); //returns string

/**
 * testing function
 */

const arreglo1 = ["asd", 123, "cadena", true, undefined, null, function asd() { return "asd" }]
console.log(filterTypes(arreglo1, "string"));
console.log(filterTypes(arreglo1, "number"));
console.log(filterTypes(arreglo1, "boolean"));
console.log(filterTypes(arreglo1, "object")); // null
console.log(filterTypes(arreglo1, "undefined"));
console.log(filterTypes(arreglo1, "function"));