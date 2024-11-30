const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movements2USD = movements2.map((mov) => mov * eurToUsd);

console.log(movements2USD);
console.log(movements2);

const movementDescription = movements2.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);

console.log(movementDescription);
