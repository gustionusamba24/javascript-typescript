"use strict";
console.log(23 === 23.0);
// base 10 - 0 to 9
// binary base 2 - 0, 1
// Conversion
console.log(Number("99"));
console.log(+"99");
// Parsing
console.log(Number.parseInt("30px", 10)); // 30
console.log(Number.parseInt("e23", 10)); // NaN
console.log(Number.parseInt("  2.5rem  ")); // 2
console.log(Number.parseFloat("  2.5rem  ")); // 2.5
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN("20")); // false
console.log(Number.isNaN(+"20X")); // true
console.log(Number.isNaN(23 / 0)); // false
// checking if value is number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite("20")); // false
console.log(Number.isFinite(+"20X")); // false
console.log(Number.isFinite(23 / 0)); // false
console.log(Number.isInteger(20)); // true
console.log(Number.isInteger(20.0)); // true
console.log(Number.isInteger(20 / 0)); // false
