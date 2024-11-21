const future = new Date(2024, 10, 19, 19, 22);
console.log(+future);

const calcDaysPassed = (date1: any, date2: any) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2024, 10, 15), new Date(2024, 10, 24));
console.log(days1);
