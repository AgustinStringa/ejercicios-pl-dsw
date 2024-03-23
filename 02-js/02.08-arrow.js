// class Persona {
//     name = 'agustin'
//     saludar = () => {
//         return this.name
//     }
// }
// const agu = new Persona();
const agu = {
    name: 'agustin',
    presentarse: () => {
        return this.name
    },
    presentarse2: () => {
        return name
    },
    sayItsName: function () {
        return this.name
    }

}
console.log(agu.presentarse()); // got undefined bc arrow functions dont bind this, arguments or super
// console.log(agu.presentarse2()); //uncomment to see the error
console.log(agu.sayItsName()); // got agustin

/**
 * No tiene bindings propios a this, arguments, o super; por ello no deberían usarse como métodos.
No pueden usarse como constructores. Invocarlas con new un error TypeError.
 */