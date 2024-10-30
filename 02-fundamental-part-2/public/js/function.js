"use strict";
// Simple function
/*
function logger(): void {
  console.log("My name is Samba");
}

logger();
logger();
logger();

function fruitProcessor(apples: number, oranges: number): string {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

console.log(fruitProcessor(4, 10));
*/
// Function Declaration
/*
console.log(calcAge1(2000));

function calcAge1(birthYear: number): number {
  const age: number = 2024 - birthYear;
  return age;
}

// Function Expression: produce value
const calcAge2 = function (birthYear: number) {
  return 2024 - birthYear;
};
console.log(calcAge2(1945));
*/
// Function calling other functions
const cutPieces = function (fruit) {
    return 5 * fruit;
};
const fruitProcessor = function (apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
};
console.log(fruitProcessor(4, 5));
