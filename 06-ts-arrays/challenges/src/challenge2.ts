const calcAverageHumanAge = function (ages: number[]): void {
  const humanAges = ages.map((age: number): number =>
    age <= 2 ? 2 * age : 16 + age * 4
  );
  const adults = humanAges.filter((age: number): boolean => age >= 18);
  const average = adults.reduce(
    (acc: number, cur: number, i: number, arr: number[]): number =>
      acc + cur / arr.length,
    0
  );

  console.log(humanAges);
  console.log(adults);
  console.log(average);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
