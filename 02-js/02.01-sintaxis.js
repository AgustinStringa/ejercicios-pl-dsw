
/**
 * get an error
 */
// const numbers = [1, 4, 5, 234, 1234];
// numbers = numbers.filter(n => n > 6);
// console.log(numbers);
function constantes() {
    let numbers2 = [1, 4, 5, 234, 1234];
    numbers2 = numbers2.filter(n => n > 6);
    console.log(numbers2);
}

var name = "agustin";
function alcance() {
    function mostrarNombre() {
        var name = 'elisito';
        console.log(name, "dentro de la funcion");
    }
    mostrarNombre();
    console.log(name, "fuera de la funcion");
}
alcance();
