"use strict";
class Person {
    constructor(_age) {
        this._age = _age;
    }
    get age() {
        return this._age;
    }
    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge;
        }
        else {
            this._age = 0;
        }
    }
}
const person1 = new Person(24);
console.log(person1.age);
person1.age = 12;
console.log(person1.age);
person1.age = -10;
console.log(person1.age);
