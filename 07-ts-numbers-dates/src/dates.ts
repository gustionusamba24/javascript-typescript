const now2 = new Date();
console.log(now2);

console.log(new Date("Aug 02 2020 18:05:41"));
console.log(new Date("December 24, 2015"));

console.log(new Date(2024, 10, 19, 19, 0, 5));
console.log(new Date(2024, 10, 33));

console.log(new Date(0));
// convert days to milliseconds
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates
console.log("=============== NEW ===============");
const future = new Date(2024, 10, 19, 19, 22);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay()); // the day of the week (zero based started from Sunday)
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString()); // 2024-11-19T19:00:00.000Z
console.log(future.getTime());

console.log(new Date(1732017600000)); // 2024-11-19T19:00:00.000Z

console.log(Date.now2());

future.setFullYear(2040);
console.log(future);
