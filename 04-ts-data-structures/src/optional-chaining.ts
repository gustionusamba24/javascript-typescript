type RestaurantTypeOC = {
  numGuests: undefined | null | number;
  name: string;
  location: string;
  categories: string[];
  starterMenu: string[];
  mainMenu: string[];
  restaurantSchedule: {
    thu: { open: number; close: number };
    fri: { open: number; close: number };
    sat: { open: number; close: number };
  };
  order(starterIndex: number, mainIndex: number): string[];
  orderDelivery(obj: {
    time: string;
    address: string;
    starterIndex: number;
    mainIndex: number;
  }): void;
  orderPizza(ing1: string, ing2: string, ing3: string): void;
  orderPasta(mainIngredient: string, ...otherIngredients: string[]): void;
};

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

const restaurantOC: RestaurantTypeOC = {
  name: "Pizza Hut",
  location: "Jalan Kaliurang KM 5, Sleman, Yogyakarta",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  restaurantSchedule, // Enhanced object literal

  order(starterIndex: number, mainIndex: number): string[] {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
    time,
    address,
    starterIndex,
    mainIndex,
  }: {
    time: string;
    address: string;
    starterIndex: number;
    mainIndex: number;
  }): void {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPizza(ing1: string, ing2: string, ing3: string): void {
    console.log(
      `Here is your delicious pizza with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPasta(mainIngredient: string, ...otherIngredients: string[]): void {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  numGuests: 0,
};

const daysOfWeekOC: string[] = [
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
  const open = restaurantOC.restaurantSchedule[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurantOC.order?.(0, 1) ?? "Method does not exist");
console.log(restaurantOC.orderRisotto?.(0, 1) ?? "Method does not exist");

// Arrays
const usersArray: { name: string; email: string }[] = [
  { name: "Balmond", email: "hello@balmond.com" },
];
console.log(usersArray[0]?.name ?? "User does not found");

console.log(restaurantOC.restaurantSchedule.mon?.open);
console.log(restaurantOC.restaurantSchedule?.mon?.open);
console.log(restaurantOC.restaurantSchedule.mon.open);
