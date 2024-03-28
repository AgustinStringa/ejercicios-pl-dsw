const sam = {
    firstName: 'Sam',
    lastName: 'Clemens',
    age: 25,
    greet() {
        return `Hello, I'm ${this.firstName} ${this.lastName}`;
    },
};

// console.log(sam.firstName);
// console.log(sam.greet());
console.log(JSON.stringify(sam.__proto__));
console.log(Object.prototype === sam.__proto__);

// el prototype default de sam es Object.prototype
// el prototype de Object.prototype es null

console.log(Object.prototype.__proto__ === null); // true



// asignando PROTOS EN OBJECT LITERALS

const mark = {
    // firstName: 'Mark',
    lastName: 'Twain',
    quote: 'Never argue with stupid people, they will drag you down to their level and then beat you with experience.',
    sayQuote() {
        return `"${this.quote}". ${this.firstName} ${this.lastName}`;
    },
    __proto__: sam,
};

/**
 * decimos que al redefinir lastName en el object que hereda el proto estamos haciendo shadowing de la prop
 */

/**
 console.log(mark.sayQuote());
 * si corro esta linea, por la herencia de proto el first name es el de sam
 */
console.log(`sam's prototype is:${JSON.stringify(sam.__proto__)}`);
/*
console.log(`mark's prototype is:${JSON.stringify(mark.__proto__)}`);
mark's prototype is:{"firstName":"Sam","lastName":"Clemens","age":25}

*/

