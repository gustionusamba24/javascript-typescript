const bills: number[] = [275, 40, 430];

for (const bill of bills) {
  const tip: number = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  const total: number = bill + tip;
  console.log(
    `The bill was ${bill}, the tip was ${tip}, and the total value is ${total}`
  );
}
