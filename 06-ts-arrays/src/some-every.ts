const movements6 = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements6);
// includes only checks for equality
console.log(movements6.includes(-400));

// some checks for a condition
const anyDeposits = movements6.some((mov: number): boolean => mov > 1500);
console.log(anyDeposits);

// every checks for all elements to satisfy a condition
console.log(movements6.every((mov: number): boolean => mov > 0));
