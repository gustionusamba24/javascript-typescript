"use strict";
class Point {
    constructor() {
        // Fields
        this.x = 0;
        this.y = 0;
    }
}
const pt = new Point();
pt.x = 2;
pt.y = 3;
console.log(`${pt.x}, ${pt.y}`);
class GoodGreeting {
    constructor(name) {
        this.name = name;
    }
}
// Instantiation
const gg = new GoodGreeting("Gustio");
console.log(gg.name);
// readonly
class Greeter {
    constructor(otherName) {
        this.name = "world";
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
