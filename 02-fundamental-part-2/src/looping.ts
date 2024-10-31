const jonasArray: (string | number | string[])[] = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// for loop
for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i]);
}

const tahun: number[] = [1991, 2007, 1969, 2020];
const ages: Array<number> = [];

for (let i = 0; i < tahun.length; i++) {
  ages.push(2037 - tahun[i]);
}

console.log(ages);
