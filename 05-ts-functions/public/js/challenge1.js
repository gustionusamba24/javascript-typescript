"use strict";
var _a;
const poll = {
    question: "What is your favorite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0), // [0,0,0,0]
    registerNewAnswer() {
        const answer = Number(prompt(`${this.question}\n${this.options.join("\n")}\n(Write option number)`));
        typeof answer === "number" &&
            answer < this.answers.length &&
            this.answers[answer]++;
        this.displayResults();
        this.displayResults("string");
    },
    displayResults(type = "array") {
        if (type === "array") {
            console.log(this.answers);
        }
        else if (type === "string") {
            console.log(`Poll result are ${this.answers.join(", ")}`);
        }
    },
};
(_a = document
    .querySelector(".answer")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", poll.registerNewAnswer.bind(poll));
