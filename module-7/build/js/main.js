"use strict";
// Enum = fitur yang ada di typescript
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
let moveUp = Direction.Up;
console.log(moveUp);
function dayOfExam(participant, day) {
    console.log(`Your name is ${participant}, and your exam date will be ${day}`);
}
dayOfExam("Mas Agus", "thu" /* Days.THURSDAY */);
