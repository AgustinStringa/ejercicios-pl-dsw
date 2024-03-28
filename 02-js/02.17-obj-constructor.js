const Person = {
    init(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.greet = function () {
            return `Hello, I'm ${this.firstName} ${this.lastName}`;
        };
    },
};

const Author = {
    __proto__: Person, // can be done with Object.create as well
    init(firstName, lastName, age, quote) {
        Person.init.call(this, firstName, lastName, age);
        this.quote = quote;
        this.sayQuote = function () {
            return `"${this.quote}". ${this.firstName} ${this.lastName}`;
        };
    },
};

const sam = Object.create(Person);
sam.init('Sam', 'Clemens', 25);

const mark = Object.create(Author);
mark.init(
    'Mark',
    'Twain',
    25,
    'Never argue with stupid people, they will drag you down to their level and then beat you with experience.'
)

console.log(sam.__proto__ === Person); //true 
console.log(Person.__proto__ === Object.prototype); // true

console.log(mark.__proto__); //Author??
console.log(mark.__proto__.__proto__); // Person
console.log(Author.__proto__); //Person
