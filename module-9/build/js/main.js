"use strict";
// function
function greet(name, age) {
    if (age) {
        return `Hello ${name}, your age is ${age} years old`;
    }
    return `Hello ${name}`;
}
console.log(greet("Skylar"));
console.log(greet("Franco", 45));
