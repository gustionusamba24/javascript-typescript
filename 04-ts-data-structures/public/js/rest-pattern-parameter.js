"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const restaurant = {
    name: "Pizza Hut",
    location: "Jalan Kaliurang KM 5, Sleman, Yogyakarta",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({ time, address, starterIndex, mainIndex }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPizza: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pizza with ${ing1}, ${ing2}, and ${ing3}`);
    },
    orderPasta: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};
// Spread Operator = unpack the array
// Rest Pattern = pack elements into an array
// Destructuring Part
// SPREAD, because on RIGHT side of =
const arrRP = [1, 2, ...[3, 4]];
// REST, because on LEFT side of =
const [x, y, ...others] = [1, 2, 3, 4, 5];
console.log(x, y, others);
// REST is always must be the last in the destructuring assignment
const [pizza, , risotto, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
// Objects
const _a = restaurant.openingHours, { sat } = _a, weekDays = __rest(_a, ["sat"]);
console.log(weekDays);
console.log(sat);
// Functions
const addRP = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
};
addRP(2, 3);
addRP(5, 3, 7, 2);
addRP(8, 2, 5, 3, 2, 1, 4);
const xx = [23, 5, 7];
addRP(...xx);
restaurant.orderPasta("mushrooms", "onion", "olives", "spinach");
console.log("mushrooms");
console.log("onion");
