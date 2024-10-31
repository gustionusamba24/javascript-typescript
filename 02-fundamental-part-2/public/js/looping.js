"use strict";
const jonasArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
];
// for loop
for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i]);
}
const tahun = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < tahun.length; i++) {
    ages.push(2037 - tahun[i]);
}
console.log(ages);
