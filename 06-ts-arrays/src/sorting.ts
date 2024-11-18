// sort method mutates the original array
const movements8 = [200, 450, -400, 3000, -650, -130, 70, 1300];

// String
const owners = ["Joy", "Zhask", "Alucard", "Argus", "Lancelot", "Lylia"];
console.log(owners.sort());

console.log(movements8);

// Numbers
// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Acsending
/*
movements8.sort((a: number, b: number): number => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});
*/
// We can simplify the above code
movements8.sort((a: number, b: number): number => a - b);
console.log(movements8);

// Descending
/*
movements8.sort((a: number, b: number): number => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
});
*/
// We can simplify the above code
movements8.sort((a: number, b: number): number => b - a);
console.log(movements8);
