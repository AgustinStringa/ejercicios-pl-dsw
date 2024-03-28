const person = {
    firstName: 'Someone',
    lastName: 'Random',
    age: 30,
    hobbies: ['reading', 'surfing', 'coding'],
    address: {
        street: '123 Mountain view st',
        city: {
            zip: 816015,
            name: 'Kunlun'
        },
        state: {
            code: 63,
            name: 'Qinghai province'
        },
        country: 'China',
        getFullAddress() {
            //this en este contexto apunta a person.address
            return `${this.street}, ${this.city.name}, ${this.state.name},${this.country}`;
        },
        getSomethingFromAddress() {
            console.log(this);

        }
    },

    getAddres: function () {
        //require this
        //return `${address.street}` got error

        return `${this.address.street}`
    }
};

// console.log(person.prototype, "prototype");
// las siguientes lineas son equivalentes
console.log(person.__proto__, "__proto__");
console.log(Object.getPrototypeOf(person), "getPrototypeOf");

//creando un objeto como person y tipeandolo en la consola se puede ver su prototype y los metodos y props que este contiene


