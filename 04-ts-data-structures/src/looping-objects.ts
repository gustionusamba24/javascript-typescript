type RestaurantTypeLO = {
  numGuests: undefined | null | number;
  name: string;
  location: string;
  categories: string[];
  starterMenu: string[];
  mainMenu: string[];
  openHours: OpenHours;
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

type OpenHours = {
  thu: { open: number; close: number };
  fri: { open: number; close: number };
  sat: { open: number; close: number };
};

const openHours: OpenHours = {
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

const restaurantLO: RestaurantTypeLO = {
  name: "Pizza Hut",
  location: "Jalan Kaliurang KM 5, Sleman, Yogyakarta",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openHours,

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

// Property name
const properties = Object.keys(openHours);
console.log(properties);

let openStr: string = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property values
const values = Object.values(openHours);
console.log(values);

// Entire Objects
const entries = Object.entries(openHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, we open at ${open} and close at ${close}`);
}
