
generarArray = () => {
    const newArray = [];
    for (let index = 0; index < 3; index++) {
        newArray.push(index);
    }
    return newArray;
}
//ojs compares object by reference
console.log([0, 1, 2] === generarArray());
console.log([0, 1, 2] == generarArray());
console.log([0, 1, 2] == [0, 1, 2]);