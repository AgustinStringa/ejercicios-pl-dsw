function printPrototypes(obj) {
    let proto = obj.__proto__;
    while (proto != null) {
        proto = proto.__proto__
        console.log(proto);
    }
}

const persona = { name: "asd" }
const myobj = {};
const another = {};
Object(another).__proto__ = persona.__proto__;
// console.log(myobj.__proto__);
// console.log(another.__proto__);


// console.log(printPrototypes(persona));
console.log(printPrototypes(printPrototypes));
