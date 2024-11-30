type RestaurantTypeRP = {
  name: string;
  location: string;
  categories: string[];
  starterMenu: string[];
  mainMenu: string[];
  openingHours: {
    thu: { open: number; close: number };
    fri: { open: number; close: number };
    sat: { open: number; close: number };
  };
  order: (starterIndex: number, mainIndex: number) => string[];
  orderDelivery: (obj: {
    time: string;
    address: string;
    starterIndex: number;
    mainIndex: number;
  }) => void;
  orderPizza: (ing1: string, ing2: string, ing3: string) => void;
  orderPasta: (mainIngredient: string, ...otherIngredients: string[]) => void;
};

const restaurantRP: RestaurantTypeRP = {
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
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPizza: function (ing1: string, ing2: string, ing3: string): void {
    console.log(
      `Here is your delicious pizza with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPasta: function (
    mainIngredient: string,
    ...otherIngredients: string[]
  ): void {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Spread Operator = unpack the array
// Rest Pattern = pack elements into an array

// Destructuring Part
// SPREAD, because on RIGHT side of =
const arrRP: number[] = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [x, y, ...others] = [1, 2, 3, 4, 5];
console.log(x, y, others);

// REST is always must be the last in the destructuring assignment
const [pizza, , risotto, ...otherFood] = [
  ...restaurantRP.mainMenu,
  ...restaurantRP.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekDays } = restaurantRP.openingHours;
console.log(weekDays);
console.log(sat);

// Functions
const addRP = function (...numbers: number[]): void {
  let sum: number = 0;
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

restaurantRP.orderPasta("mushrooms", "onion", "olives", "spinach");
console.log("mushrooms");
console.log("onion");
