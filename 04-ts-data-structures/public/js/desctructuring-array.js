"use strict";
const restaurant = {
    name: "Pizza Hut",
    location: "Jalan Kaliurang KM 5, Sleman, Yogyakarta",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};
const arr = [2, 3, 4];
const [a, b, c] = arr;
console.log(a);
console.log(b);
console.log(c);
let [main, , secondary] = restaurant.categories;
console.log(main);
console.log(secondary);
// Switching variables using destructuring
[main, secondary] = [secondary, main];
console.log(main);
console.log(secondary);
// Receive 2 return values from a function
const [starterCourse, mainCourse] = restaurant.order(2, 0);
console.log(starterCourse + ", " + mainCourse);
// Nested destructuring
const nested = [2, 4, [5, 6, [8, 9]], 10];
const [i, , [j, , [k, l]], m] = nested;
console.log(i, j, k, l, m);
// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
