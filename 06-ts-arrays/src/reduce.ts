const movements4 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements4.reduce(
  (acc: number, cur: number, i: number): number => {
    console.log(`Index ke-${i}: ${acc} + ${cur}`);
    return acc + cur;
  },
  0
);

console.log(movements4);
console.log(balance);

const max = movements4.reduce((acc: number, mov: number): number => {
  if (acc > mov) return acc;
  else return mov;
}, movements4[0]);
console.log(max);
