/*
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins);
// console.log(scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy");
}
*/

// BONUS 1
const minimumScore = 100;
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= minimumScore) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreDolphins >= minimumScore) {
  console.log("Koalas win the trophy");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy");
} else {
  console.log("No one wins the trophy");
}

// BONUS 2
