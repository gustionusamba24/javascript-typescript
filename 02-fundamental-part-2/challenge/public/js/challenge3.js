"use strict";
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    },
};
const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    },
};
console.log(mark.calcBMI());
console.log(john.calcBMI());
const higherBMI = mark.BMI > john.BMI ? mark : john;
console.log(higherBMI);
console.log(`${higherBMI.fullName}'s BMI (${higherBMI.BMI}) is higher than ${higherBMI === mark ? john.fullName : mark.fullName}'s BMI (${higherBMI === mark ? john.BMI : mark.BMI})`);
