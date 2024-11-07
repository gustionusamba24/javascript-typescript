"use strict";
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
};
const arrSO = [7, 8, 9];
const newArr = [1, 2, ...arrSO];
console.log(newArr);
console.log(...newArr);
console.log(...arrSO);
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);
// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
// Join 2 arrays
const menuSO = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menuSO);
console.log(...menuSO);
// Iterable: arrays, strings, maps, sets, and NOT objects
const str = "Balmond";
const letters = [...str, " ", "A."];
console.log(letters);
console.log(...str);
// Real world examples
// const ingredients: (string | null)[] = [
//   prompt("Let's make pizza! Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3?"),
// ];
// console.log(...ingredients);
// Objects
const newRestaurant = Object.assign(Object.assign({ foundedIn: 1958 }, restaurant), { founder: "Frank Carney" });
console.log(newRestaurant);
const restaurantCopy = Object.assign({}, restaurant);
restaurantCopy.name = "Pizza Hut Indonesia";
console.log(restaurant.name);
console.log(restaurantCopy.name);
