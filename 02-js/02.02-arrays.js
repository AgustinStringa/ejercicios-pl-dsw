const numbers = [1, 4, 5, 234, 1234];
// const filteredNumbers = structuredClone(numbers);
let filteredNumbers = [...numbers];
console.log(filteredNumbers, "filteredNumbers woth spread operator");

/**
 * object assign mantiene la referencia y modifica ambos arrays
 */
filteredNumbers = Object.assign(numbers);
numbers[0] = 0;
console.log(numbers, "numbers");
console.log(filteredNumbers, "filteredNumbers with Object.assing()");
