console.log("Samba");
console.log(24);

let firstName: string = "Gustio";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let year: number;
// console.log(year);
// console.log(typeof year);

year = 2024;
console.log(year);
console.log(typeof year);

// let, const, var
// let = block-scoped
// var = function-scoped

const currentYear: number = 2024;
const ageSamba: number = currentYear - 2000;
const ageHatma: number = currentYear - 2007;
console.log(ageSamba, ageHatma);

// Conversion and Coercion
// type conversion
console.log(Number("Samba"));
console.log(typeof NaN);

const numberToString: string = String(24);
console.log(typeof numberToString);
console.log(String(24), 24);

// type coercion
console.log("I am " + 24 + " years old");
console.log("24" - "5" - 9); // convert string to number
console.log("20" * "5" - 10); // convert string to number

console.log(Number("24") - Number("5") - 9);

let n: any = "1" + 1;
n = n - 1;
console.log(n);
