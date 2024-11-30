"use strict";
class Sonar {
    ping() {
        console.log("ping");
    }
}
class Ball {
    ping() {
        console.log("ping");
    }
    pong() {
        console.log("pong");
    }
}
class NameChecker {
    check(name) {
        return name.toLowerCase() === "ok";
    }
}
class Animal {
    move() {
        console.log("Moving along!");
    }
}
class Dog extends Animal {
    woof(times) {
        for (let i = 0; i < times; i++) {
            console.log("woof");
        }
    }
}
const d = new Dog();
d.move();
d.woof(10);
class Dasar {
    greet() {
        console.log("Hello World");
    }
}
class Warisan extends Dasar {
    greet(name) {
        if (name === undefined) {
            super.greet();
        }
        else {
            console.log(`Hello, ${name.toUpperCase()}`);
        }
    }
}
const w = new Warisan();
w.greet();
w.greet("Balmond");
