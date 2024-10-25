// interface User {
//   name: string;
//   age: number;
//   isAdmin?: boolean;
//   greet(): string;
// }

// interface User {
//   status?: boolean;
// }

// const user1: User = {
//   name: "Nunez",
//   age: 25,
//   isAdmin: false,
// };

// const user2: User = {
//   name: "Rapinha",
//   age: 27,
// };

// console.log(user1);
// console.log(user2);

// const user3: User = {
//   name: "Moh. Salah",
//   age: 32,
//   greet(): string {
//     return `Hello my name is ${this.name}, I am ${this.age} years old`;
//   },
// };

// console.log(user3);
// console.log(user3.greet());

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}

const employee1: Employee = {
  name: "Jane Doe",
  age: 32,
  employeeId: 111111,
};
