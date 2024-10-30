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

// let area: (radius: number) => number = (r) => 3.14 * r * r;

// console.log(area(7));

// declare function map<T, U>(f: (t: T) => U, ts: T[]): U[];
// let sns = map((n: number): string => n.toString(), [1, 2, 3]);

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

function area(s: Shape): number | undefined {
  if (s.kind === "circle") {
    return Math.PI * s.radius * s.radius;
  } else if (s.kind === "square") {
    return s.x * s.x;
  } else if (s.kind === "triangle") {
    return (s.x * s.y) / 2;
  }
}

console.log(area({ kind: "circle", radius: 5 }));

type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

function myFunc(someArg: number): boolean {
  return someArg > 3;
}
myFunc.description = "default description";

doSomething(myFunc);
