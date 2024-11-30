const airline1 = "TAP Air Portugal";
const plane1 = "A320";

console.log(airline1.length);
console.log("B737".length);

console.log(airline1.indexOf("A"));
console.log(airline1.indexOf("r"));
console.log(airline1.lastIndexOf("r"));
console.log(airline1.indexOf("Air"));

console.log(airline1.slice(4, 7));
console.log(airline1.slice(8, 11));

console.log(airline1.slice(0, airline1.indexOf(" ")));
console.log(airline1.slice(airline1.lastIndexOf(" ") + 1));

console.log(airline1.slice(-2));
console.log(airline1.slice(1, -3));

const checkMiddleSeat = function (seat: string) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got the middle seat");
  } else {
    console.log("You got lucky");
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");
