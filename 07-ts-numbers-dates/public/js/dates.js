"use strict";
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
const future2 = new Date(2024, 10, 19, 19, 22);
console.log(future2);
console.log(future2.getFullYear());
console.log(future2.getMonth());
console.log(future2.getDate());
console.log(future2.getDay()); // the day of the week (zero based started from Sunday)
console.log(future2.getHours());
console.log(future2.getMinutes());
console.log(future2.getSeconds());
console.log(future2.toISOString()); // 2024-11-19T19:00:00.000Z
console.log(future2.getTime());
console.log(new Date(1732017600000)); // 2024-11-19T19:00:00.000Z
console.log(Date.now2());
future2.setFullYear(2040);
console.log(future2);
