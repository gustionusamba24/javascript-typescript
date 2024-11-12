const greet = function (greeting: string) {
  return function (name: string) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHi = greet("Hi");
greeterHi("Balmond");
greeterHi("Zilong");

greet("Hello")("Saber");

const greetArr = (greeting: string) => (name: string) =>
  console.log(`${greeting} ${name}`);

greetArr("Bonjour")("Lunox");
