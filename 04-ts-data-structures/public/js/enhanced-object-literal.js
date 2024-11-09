"use strict";
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const restaurantOpeningHours = {
    [daysOfWeek[3]]: {
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
};
const restaurantEOL = {
    name: "Pizza Hut",
    location: "Jalan Kaliurang KM 5, Sleman, Yogyakarta",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    restaurantOpeningHours, // Enhanced object literal
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery({ time, address, starterIndex, mainIndex, }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPizza(ing1, ing2, ing3) {
        console.log(`Here is your delicious pizza with ${ing1}, ${ing2}, and ${ing3}`);
    },
    orderPasta(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
    numGuests: 0,
};
