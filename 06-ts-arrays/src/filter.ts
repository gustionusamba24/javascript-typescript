const movements3 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements3.filter((mov: number): boolean => mov > 0);
console.log(movements3);
console.log(deposits);

const withdrawal = movements3.filter((mov: number): boolean => mov < 0);
console.log(movements3);
console.log(withdrawal);
