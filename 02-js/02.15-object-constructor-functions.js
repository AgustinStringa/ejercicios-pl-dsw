function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype.greet = function () {
    return `Hello, I'm ${this.firstName} ${this.lastName}`;
};

const sam = new Person('Sam', 'Clemens', 25);

// console.log(sam.__proto__.constructor); //

console.log(`sam.__proto__ is Person? ${sam.__proto__ === Person}`);
console.log(`sam.__proto__ is Person.__proto__? ${sam.__proto__ === Person.__proto__}`);
console.log(`sam.__proto__ is Person.prototype? ${sam.__proto__ === Person.prototype}`);


console.log();
console.log('Persons prototype');
console.log(`Person.__proto__ is Person.prototype? ${Person.__proto__ === Person.prototype}`);

console.log(`Person.__proto__ is Function.prototype? ${Person.__proto__ === Function.prototype}`); // esto es debido a que Person es una funcion y Function.prototype es el prototipo que se asigna a todas las funciones
console.log(`Person.prototype is Object.prototype? ${Person.prototype === Object.prototype}`);
console.log(`Person.prototype.__proto__ is Object.prototype? ${Person.prototype.__proto__ === Object.prototype}`);