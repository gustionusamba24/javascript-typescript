"use strict";
const calcAverage = function (s1, s2, s3) {
    return (s1 + s2 + s3) / 3;
};
const averageDolphins = calcAverage(85, 54, 41);
const averageKoalas = calcAverage(23, 34, 27);
console.log(averageDolphins, averageKoalas);
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs (${avgKoalas}))`);
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs (${avgDolphins}))`);
    }
    else {
        console.log("No one wins");
    }
};
checkWinner(averageDolphins, averageKoalas);
