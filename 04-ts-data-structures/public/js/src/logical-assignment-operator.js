"use strict";
var _a, _b;
const restaurantLAO = {
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
    orderDelivery: function ({ time, address, starterIndex, mainIndex, }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPizza: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pizza with ${ing1}, ${ing2}, and ${ing3}`);
    },
    orderPasta: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
    numGuests: 0,
};
const restaurant1 = {
    name: "Capri",
    numGuests: 0,
};
const restaurant2 = {
    name: "La Piazza",
    owner: "Gustavo Lopez",
};
// OR assignment operator
// restaurant1.numGuests = restaurant1.numGuests || 10;
// restaurant2.numGuests = restaurant2.numGuests || 10;
// restaurant1.numGuests ||= 10;
// restaurant2.numGuests ||= 10;
// Nullish Coalescing Operator
(_a = restaurant1.numGuests) !== null && _a !== void 0 ? _a : (restaurant1.numGuests = 10);
(_b = restaurant2.numGuests) !== null && _b !== void 0 ? _b : (restaurant2.numGuests = 10);
// AND assignment operator
restaurant1.owner && (restaurant1.owner = "Anonymous");
restaurant2.owner && (restaurant2.owner = "Anonymous");
console.log(restaurant1);
console.log(restaurant2);
