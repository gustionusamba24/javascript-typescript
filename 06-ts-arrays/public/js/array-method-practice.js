"use strict";
const account1AP = {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111,
};
const account2AP = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};
const account3AP = {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};
const account4AP = {
    owner: "Sarah Smith",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};
const accountsAP = [
    account1AP,
    account2AP,
    account3AP,
    account4AP,
];
// 1. Calculate the total deposits in all accounts
const bankDepositSum = accountsAP
    .flatMap((acc) => acc.movements)
    .filter((mov) => mov > 0)
    .reduce((sum, mov) => sum + mov, 0);
console.log(bankDepositSum);
// 2. Count how many deposits are at least $1000
// method 1
// const numDeposits1000 = accountsAP
//   .flatMap((acc: AccountAP): number[] => acc.movements)
//   .filter((mov: number): boolean => mov >= 1000).length;
// method 2
const numDeposits1000 = accountsAP
    .flatMap((acc) => acc.movements)
    .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
console.log(numDeposits1000);
// 3. create new object with sum of deposits and sum of withdrawals
const { depositsAP, withdrawalsAP } = accountsAP
    .flatMap((acc) => acc.movements)
    .reduce((sums, cur) => {
    sums[cur > 0 ? "depositsAP" : "withdrawalsAP"] += cur;
    return sums;
}, { depositsAP: 0, withdrawalsAP: 0 });
console.log(depositsAP, withdrawalsAP);
// 4. Convert any string to title case
const convertTitleCase = function (title) {
    const exeptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];
    const titleCase = title
        .toLowerCase()
        .split(" ")
        .map((word) => {
        if (exeptions.includes(word))
            return word;
        return word[0].toUpperCase() + word.slice(1);
    })
        .join(" ");
    return titleCase;
};
console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));
