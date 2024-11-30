console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);

console.log(14837980629387091649187319023123n);
console.log(BigInt(14891873190231));

// Operations
console.log(10000n + 10000n);
console.log(10000n * 10000n);
// console.log(Math.sqrt(16n));

const huge = 2983649283674923n;
const num = 23;
console.log(huge * BigInt(num));

console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(typeof 20n); // bigint

console.log(huge + " is REALLY big!!!");

// Divisions
console.log(10n / 3n); // 3n
console.log(10 / 3); // 3.3333333333333335

