"use strict";
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [125, 555, 44, 100];
const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2]),
    calcTip(bills[3]),
];
const total = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2],
    bills[3] + tips[3],
];
console.log(tips);
console.log(total);
