"use strict";

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// console.log(flights.split("+"));
const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ":",
    "h"
  )})`.padStart(45);
  console.log(output);
}

// Data needed for first part of the section
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
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

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],

  // ES6 enhanced object literals
  openingHours,

  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order(startingIndex, mainIndex) {
    return [this.starterMenu[startingIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// TODO: Destructuring Array
/*
const numArray = [2, 3, 4];
const [x, y, z] = numArray;

console.log(x, y, z);
console.log(numArray);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// TODO: Nested Destructuring
const nested = [2, 3, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// Destructuring Object
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default Value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// TODO: Mutating Variable
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested Objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

restaurant.orderDelivery({
  time: "22.30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Juwangen RT 03 RW 01 No. 45",
});

// TODO: Spread Operator
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 array
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu2);

// Iterables: array, strings, maps, sets. NOT OBJECT
const str = "Gustio";
const letters = [...str, " ", "N."];
console.log(letters);
console.log(...str);

// Real world example
const ingredients2 = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Ingredient 2?"),
  // prompt("Ingredient 3?"),
];
console.log(ingredients2);

restaurant.orderPasta(...ingredients2);

// Objects
const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: "Guiseppe",
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Oliv";
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

// TODO: Rest Pattern and Parameters
// Destructuring
// Array
/*
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays2 } = restaurant.openingHours;
console.log(weekdays2, sat);

// Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 4);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [2, 3, 5];
add(...x);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("mushrooms");
*/

// TODO: Short Circuiting
/*
console.log("---- OR ----");
console.log(3 || "Jonas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || null);

restaurant.numGuests = 0;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log("---- AND ----");
console.log(0 && "Jonas");
console.log(7 && "Jonas");

console.log("Hello" && 23 && null && "jonas");

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
*/

// TODO: The Nullish Coalescing Operator (??)
/*
restaurant.numGuests = 0;
const guest = restaurant.numGuests || 10;
console.log(guest);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

// TODO: Logical Assginment Operators
/*
const rest1 = {
  name: "Capri",
  // numGuest: 20,
  numGuests: 0,
};

const rest2 = {
  name: "La Pizza",
  owner: "Giovanni Rossi",
};

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest1.owner &&= "ANONYMOUS";
rest2.owner &&= "ANONYMOUS";

console.log(rest1);
console.log(rest2);
*/

// TODO: Looping Arrays: The for-of Loop
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/

// TODO: Enhanced Object Literals

// TODO: Optional Chaining (?.)
/*
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRissoto?.(0, 1) ?? "Method does not exist");

// Arrays
const users = [
  {
    name: "Jonas",
    email: "hello@jonas.io",
  },
];

console.log(users[0]?.name ?? "User array empty");
*/

// TODO: Looping Objects: Object Keys, Object Values, and Entries
/*
// Property name
const property = Object.keys(openingHours);
console.log(property);

let openStr = `We are open on ${property.length} days: `;
for (const day of property) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property values
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day}, we open at ${open} and close at ${close}`);
}
*/

// TODO: Sets
/*
const orderSet = new Set([
  "Pizza",
  "Pasta",
  "Pizza",
  "Pizza",
  "Pasta",
  "Risotto",
]);
console.log(orderSet);

console.log(new Set("Samba"));

console.log(orderSet.size);
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Pasta"));
orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");
orderSet.delete("Risotto");
console.log(orderSet);

for (const order of orderSet) {
  console.log(order);
}

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef"]).size);

console.log(new Set("gustionusamba").size);
*/

// TODO: Maps Fundamentals
/*
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Forenze", "Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get("categories"));
console.log(rest.get("categories"));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
console.log(rest);
const arr = [1, 2];
rest.set(arr, "Test");

console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));
*/

// TODO: Maps Iteration
/*
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again!"],
]);
console.log(question);

console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
*/

// TODO: Working with Strings - Part 1
/*
const airline = "TAP Air Portugal";
const plane = "A320";

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, 3));
console.log(airline.slice(8));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got the middle seat");
  } else {
    console.log("You got lucky");
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");
*/

// TODO: Working with Strings - Part 2
/*
const airline = "TAP Air Portugal";

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = "jOnAS";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const email = "hello@jonas.com";
const loginEmail = "   Hello@Jonas.Io  \n";

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replace("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));
console.log(announcement.replaceAll("door", "gate"));

// Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Air"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the new Airbus family");
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard");
  }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");
*/

// TODO: Working with String - Part 3
// Split and join
console.log("a+very+nice+string".split("+"));
console.log("Jonas Schmedtmann".split(" "));

const [firstName, lastName] = "Gustio Nusamba".split(" ");
console.log(firstName, lastName);

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  // console.log(names);
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("jonas schmedtmann");

// Padding a string
const message = "Go to gate 23";
console.log(message.padStart(25, "+").padEnd(30, "+"));
console.log("Jonas".padStart(25, "+").padEnd(30, "+"));
console.log("okqwoqwonsoqwnsoqmwsqddd".padStart(25, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(maskCreditCard(123456789));
console.log(maskCreditCard("123456789"));
console.log(maskCreditCard(123456789123456789));
console.log(maskCreditCard(34325262423480734023));

// Repeat
const message2 = "Bad weather... All departures delayed... ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);
