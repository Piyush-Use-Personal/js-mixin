const authorizationMixin = Base => class extends Base {
    generateToken(){
        return 'token'
    }
    verifyToken(){
        return 'verify-token'
    }
}

class Person {
    constructor(name){
        this.name = name
    }
}

class Man extends authorizationMixin(Person){}

console.log(new Man('test').generateToken())