"use strict";
// BMI = mass / height ** 2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const BMIMark = Number((massMark / heightMark ** 2).toFixed(2));
const BMIJohn = Number((massJohn / heightJohn ** 2).toFixed(2));
console.log(BMIMark, BMIJohn);
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
}
else {
    console.log(`John's BMI (${BMIMark}) is higher than Mark's (${BMIJohn})`);
}
