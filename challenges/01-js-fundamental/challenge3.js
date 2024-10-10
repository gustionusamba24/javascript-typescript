// Data 1
const dolphinsAverage1 = ((96, 108, 89) / 3).toFixed(2);
const koalasAverage1 = ((88, 91, 110) / 3).toFixed(2);

if (dolphinsAverage1 > koalasAverage1) {
  console.log(`Dolphins win with an average of ${dolphinsAverage1}!`);
} else {
  console.log(`Koalas win with an average of ${koalasAverage1}!`);
}

//  Data Bonus 1
const minimumScore = 100;
const dolphinsAverage2 = (97, 112, 101) / 3;
const koalasAverage2 = (109, 95, 123) / 3;

if (dolphinsAverage2 > koalasAverage2 && dolphinsAverage2 >= minimumScore) {
  console.log(`Dolphins win with an average of ${dolphinsAverage2}!`);
} else if (
  koalasAverage2 > dolphinsAverage2 &&
  koalasAverage2 >= minimumScore
) {
  console.log(`Koalas win with an average of ${koalasAverage2}`);
} else if (
  dolphinsAverage1 === koalasAverage2 &&
  dolphinsAverage2 >= minimumScore &&
  koalasAverage2 >= minimumScore
) {
  console.log("Both win the trophy!");
} else {
  console.log("No one wins the trophy!");
}
