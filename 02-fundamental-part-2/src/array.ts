const friends: Array<string> = ["Michael", "Steven", "Peter"];
console.log(friends);

const years: number[] = [1991, 1992, 1993, 1994, 1995];
console.log(years);

console.log(friends[0]);
console.log(friends[3]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName: string = "Gustio";
const gustio: (string | string[] | number)[] = [
  firstName,
  "Nusamba",
  2024 - 2000,
  "developer",
  friends,
];
console.log(gustio);
