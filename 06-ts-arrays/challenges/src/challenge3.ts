const calcAverageHumanAge2 = function (ages: number[]): void {
  const averageHumanAge = ages
    .map((age: number): number => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age: number): boolean => age >= 18)
    .reduce(
      (acc: number, age: number, i: number, arr: number[]): number =>
        acc + age / arr.length,
      0
    );

  console.log(averageHumanAge);
};

calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);
