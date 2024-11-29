"use strict";
class Sambutan {
    greet() {
        console.log(`Hello, ${this.getName()}`);
    }
    getName() {
        return "hi";
    }
}
class SambutanSpesial extends Sambutan {
    howdy() {
        console.log(`Howdy, ${this.getName()}`);
    }
}
const s = new Sambutan();
s.greet();
const ss = new SambutanSpesial();
ss.howdy();
class Rahasia {
    x = 0;
}
// class Turunan extends Rahasia {
//   showX() {
//     console.log(this.x);
//   }
// }
// const r = new Rahasia();
// console.log(r.x);
// cross-instance private access
class A {
    x = 10;
    sameAs(other) {
        other.x === this.x;
    }
}
