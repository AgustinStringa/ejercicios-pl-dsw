function twainise(nonPrimitiveObject, primitiveFullName, primitiveAge, primitiveIsAlias) {
    nonPrimitiveObject.firstName = 'Mark';
    nonPrimitiveObject.lastName = 'Twain';
    nonPrimitiveObject.age = 47;
    nonPrimitiveObject.isAlias = true;

    primitiveFullName = 'Mark Twain';
    primitiveAge = 47;
    primitiveIsAlias = true;
}

let mark = {
    firstName: 'Sam',
    lastName: 'Clemens',
    age: 74,
    isAlias: false,
};

let fullName = 'Sam Clemens';
let age = 74;
let isAlias = false;
console.log(mark.firstName);

twainise(mark, fullName, age, isAlias);
console.log(`mark: ${JSON.stringify(mark)}`);
console.log(`fullName: ${fullName}`); // Sam Clemens
console.log(`age: ${age}`); //74
console.log(`isAlias: ${isAlias}`); //false
console.log(mark.firstName);