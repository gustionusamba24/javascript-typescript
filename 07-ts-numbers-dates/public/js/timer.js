"use strict";
for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
        if (i === 3) {
            console.log("this statement is called after 3 seconds");
        }
        else {
            console.log(i);
        }
    }, i * 1000);
}
