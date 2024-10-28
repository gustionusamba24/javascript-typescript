"use strict";
console.log("Samba");
console.log(24);
let firstName = "Gustio";
console.log(firstName);
console.log(firstName);
console.log(firstName);
let year;
// console.log(year);
// console.log(typeof year);
year = 2024;
console.log(year);
console.log(typeof year);
// let, const, var
// let = block-scoped
// var = function-scoped
const currentYear = 2024;
const ageSamba = currentYear - 2000;
const ageHatma = currentYear - 2007;
console.log(ageSamba, ageHatma);
// Conversion and Coercion
// type conversion
console.log(Number("Samba"));
console.log(typeof NaN);
const numberToString = String(24);
console.log(typeof numberToString);
console.log(String(24), 24);
// type coercion
console.log("I am " + 24 + " years old");
console.log("24" - "5" - 9); // convert string to number
console.log("20" * "5" - 10); // convert string to number
console.log(Number("24") - Number("5") - 9);
let n = "1" + 1;
n = n - 1;
console.log(n);
// truthy and falsy
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean("Samba"));
console.log(Boolean(24));
console.log("18" === 18);
console.log("18" == 18);
