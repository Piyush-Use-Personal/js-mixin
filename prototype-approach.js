
const authorizeMixin = {
    generateToken() {
        return 'any-token'
    },
    verifyToken() {
        return 'verify-token'
    }
};

class Person {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(Person.prototype, authorizeMixin);

console.log(new Person("Dude").generateToken())