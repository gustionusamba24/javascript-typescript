let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 95;
let johnHeight = 1.88;

let markBMI = (markWeight / markHeight ** 2).toFixed(2);
let johnBMI = (johnWeight / johnHeight ** 2).toFixed(2);

let markHigherBMI = markBMI > johnBMI;

console.log(markBMI);
console.log(johnBMI);
console.log(markHigherBMI);

if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
