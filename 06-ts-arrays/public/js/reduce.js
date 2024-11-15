"use strict";
const movements4 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const balance = movements4.reduce((acc, cur, i) => {
    console.log(`Index ke-${i}: ${acc} + ${cur}`);
    return acc + cur;
}, 0);
console.log(movements4);
console.log(balance);
