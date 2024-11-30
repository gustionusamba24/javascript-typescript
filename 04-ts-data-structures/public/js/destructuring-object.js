"use strict";
const restaurantObj = {
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
};
restaurantObj.orderDelivery({
    address: "Gondangan Ringinsari, Maguwoharjo, Depok, Sleman, Yogyakarta",
    time: "22.00",
    mainIndex: 2,
    starterIndex: 2,
});
const { name: restaurantName, categories, openingHours } = restaurantObj;
console.log(restaurantName);
console.log(categories);
console.log(openingHours);
const { name: restaurantName2, categories: tags, openingHours: hours, } = restaurantObj;
console.log(restaurantName2);
console.log(tags);
console.log(hours);
// Defauult Values
const { menu = [], starterMenu: starters = [] } = restaurantObj;
console.log(menu, starters);
// Mutating Variables
let e = 111;
let f = 999;
const obj = { e: 23, f: 7, g: 14 };
({ e, f } = obj);
console.log(e, f);
// Nested Objects
const { fri: { open: friOpen, close: friClose }, } = openingHours;
console.log(friOpen, friClose);
