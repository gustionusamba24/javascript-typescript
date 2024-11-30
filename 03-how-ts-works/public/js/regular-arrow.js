"use strict";
var firstName = "Grock";
const khaleed = {
    firstName: "Khaleed",
    year: 1987,
    calcAge: function () {
        // console.log(this);
        console.log(2024 - this.year);
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },
    greet: () => {
        console.log(this);
        console.log(`Hello ${this.firstName}`);
    },
};
khaleed.calcAge();
khaleed.greet();
