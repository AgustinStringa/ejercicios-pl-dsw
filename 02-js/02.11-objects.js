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

// static method returns an array of a given object's own enumerable string-keyed property names.
console.log(Object.keys(person));

function describePropertie(el) {
    console.log(`the key is '${el}' and its value is '${person[el]}'`);
}

Object.keys(person).forEach(describePropertie)

const { address: { city } } = person;
const { hobbies } = person;
console.log(city, 'city');
console.log(hobbies, 'hobbies');

console.log(person.address.getFullAddress());
person.address.getSomethingFromAddress();