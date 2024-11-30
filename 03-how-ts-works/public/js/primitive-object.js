"use strict";
// Primitive types
let lastName = "Mathilda";
let oldLastName = lastName;
lastName = "Thamuz";
console.log(lastName, oldLastName);
// Reference types
const esmeralda = {
    firstName: "Esmeralda",
    lastName: "Mathilda",
    age: 29,
};
const marriedEsmeralda = esmeralda;
marriedEsmeralda.lastName = "Thamuz";
console.log("Before marriage:", esmeralda);
console.log("After marriage:", marriedEsmeralda);
// Copying objects
const esmeralda2 = {
    firstName: "Esmeralda",
    lastName: "Mathilda",
    age: 29,
    family: ["Floryn", "Clint"],
};
const esmeraldaCopied = Object.assign({}, esmeralda2);
esmeraldaCopied.lastName = "Thamuz";
console.log(esmeralda2);
console.log(esmeraldaCopied);
esmeraldaCopied.family.push("Nathan");
esmeraldaCopied.family.push("Lunox");
console.log(esmeralda2);
console.log(esmeraldaCopied);
