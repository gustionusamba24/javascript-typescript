const oneWord = function (str: string) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str: string) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = function (str: string, fn: (str: string) => string) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("Javascript is the best!", upperFirstWord);
transformer("Javascript is the best!", oneWord);

// JS uses callback all the time
const high5 = function () {
  console.log("Hello 🖐️");
};

document.body.addEventListener("click", high5);

["Mathilda", "Freya", "Cyclops"].forEach(high5);
