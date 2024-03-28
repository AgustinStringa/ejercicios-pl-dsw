//Si quisiéramos crear el primer objeto sam con Object.create deberíamos utilizar el objeto {} como prototype:

const sam = {
    firstName: 'Sam',
    lastName: 'Clemens',
    age: 25,
    greet() {
        return `Hello, I'm ${this.firstName} ${this.lastName}`;
    },
};

const mark = Object.create(sam, {
    firstName: { value: 'mark' },
    lastName: { value: 'hopuus' },
    greet: { value: function () { return `this is the way I greet ` } },
})

// console.log(mark.greet());
// console.log(mark.age);

const noLiteralSam = Object.create({},
    {
        firstName: { writable: true },
    }
)

const noLiteralMark = Object.create(noLiteralSam, {
    firstName: { value: 'markkitos', writable: false }
});
//writable false, evita cambiar la prop mediante =
// las configs no se heredan
noLiteralMark.firstName = 'mark';
noLiteralSam.firstName = 'Sam';
console.log(noLiteralMark.firstName);
console.log(noLiteralSam.firstName);