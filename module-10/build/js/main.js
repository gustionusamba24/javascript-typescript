"use strict";
function combine(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a + " " + b + " ini string";
    }
}
console.log(combine(1, 2));
console.log(combine("hello", "world"));
