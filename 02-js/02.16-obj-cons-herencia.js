function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype.greet = function () {
    return `Hello, I'm ${this.firstName} ${this.lastName}`;
};


function Author(firstName, lastName, age, quote) {
    Person.call(this, firstName, lastName, age);
    this.quote = quote;
}

Author.prototype = Object.create(Person.prototype);
Author.prototype.constructor = Author;

Author.prototype.sayQuote = function () {
    return `"${this.quote}". ${this.firstName} ${this.lastName}`;
};

const mark = new Author(
    'Mark',
    'Hoppus',
    25,
    'I am the bassists.'
);

console.log(mark.greet());
console.log(mark.sayQuote());