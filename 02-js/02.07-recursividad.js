//Declaration
function sayHiDeclaration(recipient, greeting = 'Hi') {
    if (typeof recipient === 'string') {
        return `${greeting} ${recipient}`;
    } else if (typeof recipient === 'object') {
        return sayHiDeclaration(`${recipient.firstName} ${recipient.lastName}`, greeting);
    }
}

//Expression
const greetExpression = function sayHiExpression(recipient, greeting = 'Hi') {
    if (typeof recipient === 'string') {
        return `${greeting} ${recipient}`;
    } else if (typeof recipient === 'object') {
        return sayHiExpression(`${recipient.firstName} ${recipient.lastName}`, greeting);
    }
};
const agu = {
    firstName: 'agus',
    lastName: 'stringa'
}
// console.log(sayHiDeclaration(agu))

//Anonymous function expression
const greetExpressionAnonymous = function (recipient, greeting = 'Hi') {
    if (typeof recipient === 'string') {
        return `${greeting} ${recipient}`;
    } else if (typeof recipient === 'object') {
        return greetExpressionAnonymous(`${recipient.firstName} ${recipient.lastName}`, greeting);
    }
};

console.log(greetExpressionAnonymous(agu));
console.log(greetExpressionAnonymous("agustin nicolas"));

const greetArrowFunction = (recipient, greeting = 'Hi') => {
    if (typeof recipient === 'string') {
        return `${greeting} ${recipient}`;
    } else if (typeof recipient === 'object') {
        return greetArrowFunction(`${recipient.firstName} ${recipient.lastName}`, greeting);
    }
};