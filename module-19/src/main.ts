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
// interface User<T, U> {
//   name: T;
//   age: U;
// }

// const user1: User<string, number> = {
//   name: "Darwin Nunez",
//   age: 25,
// };

// Generic Constraint
function printLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}

printLength([1.2, 3, 4, 5.6, 99.1]);
printLength<string>("Gustio Nusamba");
