console.log(this);
const calcAgeExpr = function (birthYear: number): void {
  console.log(2040 - birthYear);
  console.log(this);
};
calcAgeExpr(1992);

const calcAgeArr = (birthYear: number): void => {
  console.log(2040 - birthYear);
  console.log(this); // uses lexical this keyword (use parent keyword)
};
calcAgeArr(1989);

const xavier = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2040 - 1998);
  },
};

xavier.calcAge();
