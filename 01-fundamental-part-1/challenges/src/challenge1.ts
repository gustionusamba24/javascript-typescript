// BMI = mass / height ** 2
const markWeight: number = 78;
const markHeight: number = 1.69;
const johnWeight: number = 92;
const johnHeight: number = 1.95;

const markBMI: number = Number((markWeight / markHeight ** 2).toFixed(2));
const johnBMI: number = Number((johnWeight / johnHeight ** 2).toFixed(2));

console.log(markBMI, johnBMI);

const markHigherBMI: boolean = markBMI > johnBMI;
console.log(markHigherBMI);
