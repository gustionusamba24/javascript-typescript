"use strict";
const dogs = [
    { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
    { weight: 8, curFood: 200, owners: ["Matilda"] },
    { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
    { weight: 32, curFood: 340, owners: ["Michael"] },
];
// 1.
dogs.forEach((dog) => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log("Number 1");
console.log(dogs);
// 2.
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log("Number 2");
console.log(dogSarah);
console.log(`Sarah's dog is eating ${dogSarah.curFood > (dogSarah === null || dogSarah === void 0 ? void 0 : dogSarah.recommendedFood) ? "too much" : "too little"}`);
// 3.
const ownersEatTooMuch = dogs
    .filter((dog) => dog.curFood > dog.recommendedFood)
    .flatMap((dog) => dog.owners);
const ownersEatTooLittle = dogs
    .filter((dog) => dog.curFood < dog.recommendedFood)
    .flatMap((dog) => dog.owners);
console.log("Number 3");
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);
// 4.
console.log("Number 4");
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);
// 5.
console.log("Number 5");
console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));
// 6.
console.log("Number 6");
const checkEatingOkay = (dog) => dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1;
console.log(dogs.some(checkEatingOkay));
// 7.
console.log("Number 7");
const dogsEatingOkay = dogs.filter(checkEatingOkay);
console.log(dogsEatingOkay);
// 8.
console.log("Number 8");
const dogsCopy = dogs
    .slice()
    .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogs);
console.log(dogsCopy);
