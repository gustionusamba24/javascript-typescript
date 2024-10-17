// Primitive Data Types
// Type String
let username: string = "gustionusamba";

// Type Number
let age: number = 24;

// Type Boolean
let isMarried: boolean = false;

// Array
let primeNumbers: number[] = [2, 3, 5, 7, 11, 13];
let hobbies: string[] = ["Coding", "Playing Badminton", "Watching Movie"];

// Tupple
let person: [string, number, number] = ["Hatma", 23, 100];

console.log(
  `Username : ${username}, He is ${age} years old, He is ${
    isMarried ? "" : "not"
  } married. His hobbies are ${hobbies}. He has little brother ${person}`
);
