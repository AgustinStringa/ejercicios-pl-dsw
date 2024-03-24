// function logarithmicDistribution(a, b) {
//     const u = Math.random();
//     return a * Math.exp(u * Math.log(b / a));
// }

// function normalDistribution(mean, stddev) {
//     const u = Math.random();
//     const z0 = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * Math.random());
//     return z0 * stddev + mean;
// }

// console.log(normalDistribution(1, 25));
// console.log(logarithmicDistribution(1, 25));


// function distBasedRandom(a, b, dist) {
//     return Math.round(1000 * dist(a, b)) / 1000; //round in 3 decimals
// }

// for (let i = 0; i < 10; i++) {
//     normal.push(distBasedRandom(100, 10, normalDistribution));
//     loga.push(distBasedRandom(100, 10, logarithmicDistribution));
// }

/**
 * en caso de que usase este codigo, estoy generando cierto acoplamiento/dependencia entre distBasedRandom por medio de los params a,b
 * solo recibe estos parametros para enviarlos y ademas, los enviados están atados a los recibidos por distBasedRandom
 */


let normal = [];
let loga = [];

for (let i = 0; i < 10; i++) {
    const distNormal = normalDistribution(100, 10);
    const distLoga = logarithmicDistribution(100, 10);

    normal.push(distBasedRandom(distNormal));
    loga.push(distBasedRandom(distLoga));
}

console.log(`normal: ${normal}`);
console.log();
console.log(`loga: ${loga}`);

function distBasedRandom(dist) {
    const u = Math.random();
    console.log(u, dist);
    return Math.round(1000 * dist(u)) / 1000; //round in 3 decimals
}

function logarithmicDistribution(a, b) {
    return function (u) {
        return a * Math.exp(u * Math.log(b / a));
    };
}

function normalDistribution(mean, stddev) {
    return function (u) {
        const z0 = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * Math.random());
        return z0 * stddev + mean;
    };
}

/**
 * log y normal retornan una funcion que no recibe directamente los parametros, solo la semilla
 */

const words = ['Hi all', 'this are', 'high-order functions'];
words.forEach((el, inde) => {
    console.log(el);
})