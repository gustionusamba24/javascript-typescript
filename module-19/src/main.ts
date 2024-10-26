// function identity<T>(value: T): T {
//   return value;
// }

// console.log(identity<string>("Gustio Nusamba"));
// console.log(identity<number>(24));

class Box<T> {
  constructor(public content: T) {
    this.content = content;
  }

  getContent(): T {
    return this.content;
  }
}

let numberBox = new Box<number>(123);
let stringBox = new Box<string>("Hello Box");
console.log(numberBox.getContent());
console.log(stringBox.getContent());
