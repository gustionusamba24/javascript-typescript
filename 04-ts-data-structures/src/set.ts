type RestaurantTypeSet = {
  numGuests: undefined | null | number;
  name: string;
  location: string;
  categories: string[];
  starterMenu: string[];
  mainMenu: string[];
  openHoursSet: OpenHoursSet;
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

type OpenHoursSet = {
  thu: { open: number; close: number };
  fri: { open: number; close: number };
  sat: { open: number; close: number };
};

const openHoursSet: OpenHoursSet = {
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

const restaurantSet: RestaurantTypeSet = {
  name: "Pizza Hut",
  location: "Jalan Kaliurang KM 5, Sleman, Yogyakarta",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openHoursSet,

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

// set is collection that stores unique values
const directions = new Set<string>(["east", "west"]);

let diceEntries = new Set<number>();
// Add values
diceEntries.add(1);
diceEntries.add(2);
diceEntries.add(3);
diceEntries.add(4).add(5).add(6);
console.log(diceEntries);

// Check the value is present or not
console.log(diceEntries.has(1));
console.log(diceEntries.has(10));

// size of Set
console.log(diceEntries.size);

// Delete a value from a set
diceEntries.delete(6);
console.log(diceEntries);

// Clear whole Set
diceEntries.clear();
console.log(diceEntries);

// Iterating over a Set
let mySet = new Set<number>();

// added 6 entries into the set
mySet.add(1).add(2).add(3).add(4).add(5).add(6);

// Iterate over the set
for (const currentNumber of mySet) {
  console.log(currentNumber);
}

console.log("================");

mySet.forEach(function (value: number) {
  console.log(value);
});

console.log("================");

mySet.forEach((value) => console.log(value));

const numSet = new Set<number>();

numSet.add(1).add(2).add(2);

console.log(numSet);

// Set of custom Types - Object Equality
type Person = Record<string, string>;

const personSet = new Set<Person>();

const alucard: Person = {
  name: "Alucard",
};

const alucardDuplicate: Person = {
  name: "Alucard",
};

personSet.add(alucard);
personSet.add(alucardDuplicate);

console.log(personSet);

// The solution of the problem above is by creating custom data structure that handles the desired object equality rules as follows
class SetWithContentEquality<T> {
  private items: T[] = [];
  private getKey: (item: T) => string;

  constructor(getKey: (item: T) => string) {
    this.getKey = getKey;
  }

  add(item: T): void {
    const key = this.getKey(item);
    if (!this.items.some((existing) => this.getKey(existing) === key)) {
      this.items.push(item);
    }
  }

  has(item: T): boolean {
    return this.items.some(
      (existing) => this.getKey(existing) === this.getKey(item)
    );
  }

  values(): T[] {
    return [...this.items];
  }
}

const newPersonSet = new SetWithContentEquality<Person>(
  (person) => person.name
);

const granger: Person = {
  name: "Granger",
};

const grangerDuplicate: Person = {
  name: "Granger",
};

newPersonSet.add(granger);
newPersonSet.add(grangerDuplicate);
console.log(newPersonSet);
console.log(newPersonSet.values());

console.log(new Set("gustionusamba"));
console.log(new Set("gustionusamba").size);
