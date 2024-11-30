interface Home {
  readonly resident: { name: string; age: number };
}

function visitForBirthDay(home: Home) {
  console.log(`Happy birthday ${home.resident.name}`!);
  home.resident.age++;
}

function evict(home: Home) {
  // read-only property
  //   home.resident = {
  //     name: "Jack Daniel",
  //     age: 42,
  //   };
}

interface Person {
  name: string;
  age: number;
}

interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

let writablePerson: Person = { name: "Person McPersonface", age: 42 };

let readonlyerson: ReadonlyPerson = writablePerson;

console.log(readonlyerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyerson.age); // prints '43'
