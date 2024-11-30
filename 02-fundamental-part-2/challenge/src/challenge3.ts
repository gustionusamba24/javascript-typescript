type User = {
  fullName: string;
  mass: number;
  height: number;
  BMI?: number;
  calcBMI: () => number;
};

const mark: User = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function (): number {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john: User = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function (): number {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

console.log(mark.calcBMI());
console.log(john.calcBMI());

const higherBMI = mark.BMI! > john.BMI! ? mark : john;
console.log(higherBMI);

console.log(
  `${higherBMI.fullName}'s BMI (${higherBMI.BMI}) is higher than ${
    higherBMI === mark ? john.fullName : mark.fullName
  }'s BMI (${higherBMI === mark ? john.BMI : mark.BMI})`
);
