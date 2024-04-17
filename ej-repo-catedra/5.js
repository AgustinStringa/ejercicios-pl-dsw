let frase = "materias aprobadas 0 habiendo rendido 0 veces"

//console.log(frase.indexOf("aprobadas")); // 9 arranca
console.log((frase.indexOf("rendido"))); // 30 arranca

let mat = parseInt(frase[frase.indexOf("aprobadas") + 9 + 1]);
let rendidas = parseInt(frase[frase.indexOf("rendido") + 7 + 1]);

function aprobar() {
    mat += 1
    rendidas += 1
}

function reprobar() {
    rendidas += 1
}

//exe
reprobar()
reprobar()
aprobar()
console.log(`MAT:${mat} rend:${rendidas}`);