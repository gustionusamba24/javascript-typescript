"use strict";
console.log("a+vert+nice+string".split("+"));
console.log("Gustio Nusamba".split(" "));
const [firstName, lastName] = "Hatmaja Narotama".split(" ");
console.log(firstName);
console.log(lastName);
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);
const capitalizeName = function (name) {
    const names = name.split(" ");
    const namesUpper = [];
    for (const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1));
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper.join(" "));
};
capitalizeName("jessica ann smith davis");
capitalizeName("khaleed al balawiyah");
// Padding
const message = "Go to gate 23";
console.log(message.padStart(40, "🆕"));
console.log("Terizla".padStart(40, "🆕"));
