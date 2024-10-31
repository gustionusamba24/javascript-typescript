"use strict";
function visitForBirthDay(home) {
    console.log(`Happy birthday ${home.resident.name}`);
    home.resident.age++;
}
function evict(home) {
    // read-only property
    //   home.resident = {
    //     name: "Jack Daniel",
    //     age: 42,
    //   };
}
let writablePerson = {
    name: "Person McPersonface",
    age: 42,
};
let readonlyerson = writablePerson;
console.log(readonlyerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyerson.age); // prints '43'
