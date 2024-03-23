'use strict';

hoisting('this is hoisting');
// noHoisting("this isn't hoisting"); //uncomment to see the error
couldBeHoisting("let's try"); //uncomment to see the error

function hoisting(printText) {
    console.log(printText);
}

const noHoisting = function (printText) {
    console.log(printText);
};

const couldBeHoisting = (printText) => {
    console.log(printText);
}