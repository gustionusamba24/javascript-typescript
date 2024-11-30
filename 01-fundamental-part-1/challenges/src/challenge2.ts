// BMI = mass / height ** 2
const massMark: number = 78;
const heightMark: number = 1.69;
const massJohn: number = 92;
const heightJohn: number = 1.95;

const BMIMark: number = Number((massMark / heightMark ** 2).toFixed(2));
const BMIJohn: number = Number((massJohn / heightJohn ** 2).toFixed(2));

console.log(BMIMark, BMIJohn);
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
} else {
  console.log(`John's BMI (${BMIMark}) is higher than Mark's (${BMIJohn})`);
}
