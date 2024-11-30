const movements7 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const arr3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arr3.flat());

const arrDeeper = [
  [[1, 2], 3],
  [
    [4, 5],
    [[6, 7], 8],
  ],
];
console.log(arrDeeper.flat());
console.log(arrDeeper.flat(3));
