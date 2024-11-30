// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = "Balmond";
let job: string = "Lecturer";
const year: number = 1987;

// Functions
console.log(addDecl(5, 7));
// console.log(addExpr(5, 7));
// console.log(addArr);
// console.log(addArr(5, 7));

function addDecl(a: number, b: number): number {
  return a + b;
}

const addExpr = function (a: number, b: number): number {
  return a + b;
};

var addArr = (a: number, b: number): number => a + b;

// Example
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart(): void {
  console.log("All products deleted");
}
