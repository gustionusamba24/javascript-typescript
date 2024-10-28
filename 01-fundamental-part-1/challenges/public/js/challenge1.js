"use strict";
// BMI = mass / height ** 2
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;
const markBMI = Number((markWeight / markHeight ** 2).toFixed(2));
const johnBMI = Number((johnWeight / johnHeight ** 2).toFixed(2));
console.log(markBMI, johnBMI);
const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
