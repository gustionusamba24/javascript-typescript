"use strict";
// function identity<T>(value: T): T {
//   return value;
// }
// console.log(identity<string>("Gustio Nusamba"));
// console.log(identity<number>(24));
class Box {
    constructor(content) {
        this.content = content;
        this.content = content;
    }
    getContent() {
        return this.content;
    }
}
let numberBox = new Box(123);
let stringBox = new Box("Hello Box");
console.log(numberBox.getContent());
console.log(stringBox.getContent());
