"use strict";
let arr = ["a", "b", "c", "d", "e"];
// SLICE = doesn't mutate the original array
console.log("============ SLICE ============");
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);
// Shallow copy in JS: you can use spread operator or method slice()
// SPLICE = same as SLICE, but it does actually change the original array (mutates array)
console.log("============ SPLICE ============");
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr); // the element of the original array will be gone if we use splice method
console.log("============ REVERSE ============");
// REVERSE = this method does actually mutate the original array
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["p", "l", "m", "s", "r", "n", "o", "q", "k"];
console.log(arr2.reverse());
console.log(arr2);
// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
// JOIN
console.log(letters.join(" | "));
