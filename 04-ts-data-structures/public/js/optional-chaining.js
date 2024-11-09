"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
// const daysOfWeekOC: string[] = [
//   "mon",
//   "tue",
//   "wed",
//   "thu",
//   "fri",
//   "sat",
//   "sun",
// ];
const restaurantSchedule = {
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
};
const restaurantOC = {
    name: "Pizza Hut",
    location: "Jalan Kaliurang KM 5, Sleman, Yogyakarta",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    restaurantSchedule, // Enhanced object literal
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
const daysOfWeekOC = [
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
    "sun",
];
for (const day of daysOfWeekOC) {
    console.log(day);
    const open = (_b = (_a = restaurantOC.restaurantSchedule[day]) === null || _a === void 0 ? void 0 : _a.open) !== null && _b !== void 0 ? _b : "closed";
    console.log(`On ${day}, we open at ${open}`);
}
// Methods
console.log((_d = (_c = restaurantOC.order) === null || _c === void 0 ? void 0 : _c.call(restaurantOC, 0, 1)) !== null && _d !== void 0 ? _d : "Method does not exist");
console.log((_f = (_e = restaurantOC.orderRisotto) === null || _e === void 0 ? void 0 : _e.call(restaurantOC, 0, 1)) !== null && _f !== void 0 ? _f : "Method does not exist");
// Arrays
const usersArray = [
    { name: "Balmond", email: "hello@balmond.com" },
];
console.log((_h = (_g = usersArray[0]) === null || _g === void 0 ? void 0 : _g.name) !== null && _h !== void 0 ? _h : "User does not found");
console.log((_j = restaurantOC.restaurantSchedule.mon) === null || _j === void 0 ? void 0 : _j.open);
console.log((_l = (_k = restaurantOC.restaurantSchedule) === null || _k === void 0 ? void 0 : _k.mon) === null || _l === void 0 ? void 0 : _l.open);
console.log(restaurantOC.restaurantSchedule.mon.open);
