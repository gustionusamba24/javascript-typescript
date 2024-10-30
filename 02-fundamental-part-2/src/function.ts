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
const cutPieces = function (fruit: number): number {
  return 5 * fruit;
};

const fruitProcessor = function (apples: number, oranges: number): string {
  const applePieces: number = cutPieces(apples);
  const orangePieces: number = cutPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
};

console.log(fruitProcessor(4, 5));

// Reviewing function
const calcAge = function (birthYear: number): number {
  return 2024 - birthYear;
};

const yearsUntilRetirement = function (
  firstName: string,
  birthYear: number
): number {
  const age: number = calcAge(birthYear);
  const retirement: number = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement("Darwin", 1999));
console.log(yearsUntilRetirement("Cristiano", 1985));
console.log(yearsUntilRetirement("Carlo", 1959));
