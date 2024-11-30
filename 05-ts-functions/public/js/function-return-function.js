"use strict";
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};
const greeterHi = greet("Hi");
greeterHi("Balmond");
greeterHi("Zilong");
greet("Hello")("Saber");
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArr("Bonjour")("Lunox");
