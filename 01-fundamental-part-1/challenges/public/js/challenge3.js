"use strict";
const averageDolphins = (97 + 112 + 101) / 3;
const averageKoalas = (109 + 95 + 123) / 3;
console.log(averageDolphins, averageKoalas);
if (averageDolphins > averageKoalas) {
    console.log("Dolphins win the trophy ");
}
else if (averageKoalas > averageDolphins) {
    console.log("Koalas win the trophy");
}
else if (averageDolphins === averageKoalas) {
    console.log("Both are win");
}
const minimumScore = 100;
// minimum score of 100
if (averageDolphins >= minimumScore && averageDolphins > averageKoalas) {
    console.log("Dolphins win the trophy");
}
else if (averageKoalas >= minimumScore && averageKoalas > averageDolphins) {
    console.log("Koalas win the trophy");
}
else if (averageDolphins >= minimumScore &&
    averageDolphins >= minimumScore &&
    averageDolphins === averageKoalas) {
    console.log("Both are win");
}
else {
    console.log("No one wins the trophy");
}
