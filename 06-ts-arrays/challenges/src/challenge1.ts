const checkDogs = function (dogsJulia: number[], dogsKate: number[]) {
  const dogsJuliaCopy = [...dogsJulia];
  dogsJuliaCopy.splice(0, 1);
  dogsJuliaCopy.splice(-2);

  const correctedData = [...dogsJuliaCopy, ...dogsKate];
  console.log(correctedData);

  correctedData.forEach((dog, i) => {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
