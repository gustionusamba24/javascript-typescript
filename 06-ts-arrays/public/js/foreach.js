"use strict";
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.forEach(function (mov, i, arr) {
    if (mov > 0) {
        console.log(`Movement ${i + 1}: You deposited ${mov}`);
    }
    else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
    }
});
// the difference between forof and forEach is that we can't break out of a forEach loop. So break and continue do not work in a forEach loop
// forEach always loop the entire array
const currencies = new Map([
    ["USD", "United States Dollar"],
    ["EUR", "Euro"],
    ["GBP", "Pound sterling"],
]);
// forEach for Maps
currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
});
// forEach for Set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
currenciesUnique.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
});
