class Point {
  // Fields
  x: number = 0;
  y: number = 0;
}

const pt = new Point();
pt.x = 2;
pt.y = 3;
console.log(`${pt.x}, ${pt.y}`);

class GoodGreeting {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
// Instantiation
const gg = new GoodGreeting("Gustio");
console.log(gg.name);

// readonly
class Greeter {
  readonly name: string = "world";

  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }

  err() {
    // Cannot assign to 'name' because it is a read-only property
    // this.name = "not ok";
  }
}

const g = new Greeter("Makan");
console.log(g.name);
// Cannot assign to 'name' because it is a read-only property.
// g.name = "also not ok";
