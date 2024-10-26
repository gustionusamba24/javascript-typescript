"use strict";
class Calculator {
    static calculateArea(radius) {
        return Calculator.pi * radius ** 2;
    }
}
Calculator.pi = 3.14;
console.log(Calculator.calculateArea(10));
