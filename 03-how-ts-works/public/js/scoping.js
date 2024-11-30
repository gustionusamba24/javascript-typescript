"use strict";
function calcAge(birthYear) {
    const age = 2040 - birthYear;
    function printAge() {
        let output = `${firstName} You are ${age}, born in ${birthYear}`;
        console.log(output);
        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true; // var is function scope, so they are not block scoped at all. Therefore, they ignore the behavior of block scope
            // CREATING new variable with same name as outer scope's variable
            const firstName = "Alucard";
            const str = `Oh and you are a millenial, ${firstName}`; // JS takes variable in the same scope
            console.log(str);
            function add(a, b) {
                return a + b;
            }
            output = "NEW OUTPUT";
        }
        // console.log(millenial); // var is still executed
        // add(5,5) // function is a blocke-scoped
        console.log(output);
    }
    printAge();
    return age;
}
const firstName = "Xavier";
calcAge(1991);
console.log(calcAge(1985));
console.log(calcAge(1980));
