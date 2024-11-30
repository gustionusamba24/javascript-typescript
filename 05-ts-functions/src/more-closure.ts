// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 500;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Reassign f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n: number, wait: number) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000
boardPassengers(210, 3);
