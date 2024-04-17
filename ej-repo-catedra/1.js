//Crear un array con 10 valores y mostrarlo en sentido inverso sin modificar el array.
const arreglo = [];
for (let index = 1; index <= 10; index++) {
    arreglo[index] = index;
}

//one method
for (let index = 10; index >= 0; index--) {
    console.log(arreglo[index]);
}
