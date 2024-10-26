// function identity<T>(value: T): T {
//   return value;
// }

// console.log(identity<string>("Gustio Nusamba"));
// console.log(identity<number>(24));

// Generic class
// class Box<T> {
//   constructor(public content: T) {
//     this.content = content;
//   }

//   getContent(): T {
//     return this.content;
//   }
// }

// let numberBox = new Box<number>(123);
// let stringBox = new Box<string>("Hello Box");
// console.log(numberBox.getContent());
// console.log(stringBox.getContent());

// Generic Interface
interface User<T, U> {
  name: T;
  age: U;
}

const user1: User<string, number> = {
  name: "Darwin Nunez",
  age: 25,
};
