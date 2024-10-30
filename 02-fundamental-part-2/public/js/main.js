"use strict";
// Simple function
function logger() {
    console.log("My name is Samba");
}
logger();
logger();
logger();
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
console.log(fruitProcessor(4, 10));
