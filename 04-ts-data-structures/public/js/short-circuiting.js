"use strict";
const restaurantSC = {
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
    numGuests: 0,
};
console.log("=============== OR ===============");
// console.log(3 || "Nana"); // 3
// console.log("Leomord" || null); // "Leomord"
// console.log(undefined || null); // null
// console.log(0 || 45); // 45
// console.log(undefined || 0 || null || "" || "Claude" || 24); // "Claude"
// restaurantSC.numGuests = 23;
const guest1 = restaurantSC.numGuests ? restaurantSC.numGuests : 10;
console.log(guest1); // 23
const guest2 = restaurantSC.numGuests || 10;
console.log(guest2);
console.log("=============== AND ===============");
// console.log(0 && "Zilong"); // 0
// console.log("Miya" && "Lunox" && 90); // 90
// console.log(undefined && "Lunox" && 90); // undefined
// console.log(0 || null || undefined); // undefined
// console.log(true && "Irithel"); // "Irithel"
// console.log("HELLO" && 23 && null && "Jonas"); // null
// Practice Example
if (restaurantSC.orderPasta) {
    restaurantSC.orderPasta("Carbonara", "Bacon", "Egg");
}
restaurantSC.orderPasta && restaurantSC.orderPasta("Flour", "Mushroom");
// The Nullist Coalescing Operator (??)
console.log("=============== NULLIST COALESCING (??) ===============");
const guestCorrect = restaurantSC.numGuests ?? 10;
console.log(guestCorrect);
