function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Gustio Nusamba"));
console.log(identity<number>(24));
