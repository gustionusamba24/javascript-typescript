const bills2: number[] = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52, 100];
const tips2: number[] = [];
const totals2: number[] = [];

const calcTip2 = function (bill: number): number {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (const bill of bills2) {
  const tip = calcTip2(bill);
  tips2.push(tip);
  totals2.push(bill + tip);
}

console.log(bills2);
console.log(tips2);
console.log(totals2);

const calcAverage2 = function (arr: number[]): number {
  let sum: number = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage2(totals2));