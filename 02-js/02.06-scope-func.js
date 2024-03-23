let x = 1;
let y = 'test';
withVars();

function withVars() {
    let x = 'a';
    console.log(x, y); // deberia imprimir 'a' 'test'
}

console.log(x, y); // deberia imprimir 1 'test'

/**
 * hoisting hace referencia a que las funciones pueden llamarse antes de ser declaradas
 */