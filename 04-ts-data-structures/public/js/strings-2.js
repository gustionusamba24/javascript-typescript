"use strict";
const airline2 = "TAP Air Portugal";
console.log(airline2.toLowerCase());
console.log(airline2.toUpperCase());
// Fix capitalitzation in name
const passenger = "jOnAs";
const passengerLower = passenger.toLowerCase();
const correctPassenger = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(correctPassenger);
// Comparing email
const email = "hello@balmond.ml";
const loginEmail = "  Hello@Balmond.ML \n";
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);
// Replacing
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);
const announcement = "All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));
// Boolean
const plane2 = "Airbus A320neo";
console.log(plane2.includes("A320"));
console.log(plane2.includes("Boeing"));
console.log(plane2.startsWith("Ai"));
if (plane2.startsWith("Airbus") && plane2.endsWith("neo")) {
    console.log("Part of the new Airbus family");
}
const checkBaggage = function (items) {
    const itemsLower = items.toLowerCase();
    if (itemsLower.includes("knife") || itemsLower.includes("gun")) {
        console.log("You are not allowed on board");
    }
    else {
        console.log("Welcome aboard");
    }
};
checkBaggage("I have a laptop, some Food, and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");
