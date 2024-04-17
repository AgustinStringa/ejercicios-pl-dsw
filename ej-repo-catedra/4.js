//Crear una función que reciba un array y una cadena. La función debe revisar si la cadena ya se encuentra en el array y si no agregarla al final y siempre debe devolver la posición del array donde se encuentra ya sea que existiera o si la agregó.


function getTextPosition(array, string) {
    const position = array.indexOf(string);
    if (position == -1) {
        array.push(string);
    }
    return array.indexOf(string);
}
const arreglo = ["algo", "nuevo", "pálabra", "palabra", "asd", "algo", "palabra"];

// console.log(getTextPosition(arreglo, "pálabra"));
// console.log(getTextPosition(arreglo, "algo"));
console.log(getTextPosition(arreglo, "violin"));
console.log(getTextPosition(arreglo, "smallest"));