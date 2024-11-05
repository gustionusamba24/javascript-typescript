"use strict";
// Variables
console.log(me);
// console.log(job);
// console.log(year);
var me = "Balmond";
let job = "Lecturer";
const year = 1987;
// Functions
console.log(addDecl(5, 7));
// console.log(addExpr(5, 7));
// console.log(addArr);
// console.log(addArr(5, 7));
function addDecl(a, b) {
    return a + b;
}
const addExpr = function (a, b) {
    return a + b;
};
var addArr = (a, b) => a + b;
// Example
console.log(numProducts);
if (!numProducts)
    deleteShoppingCart();
var numProducts = 10;
function deleteShoppingCart() {
    console.log("All products deleted");
}
