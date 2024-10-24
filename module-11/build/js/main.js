"use strict";
function processData(data, callback) {
    data.forEach(callback);
}
function logResult(item) {
    console.log(item ** 2);
}
processData([1, 2, 3, 4, 5, 6, 7, 8], (item) => {
    console.log(item ** 2);
});
