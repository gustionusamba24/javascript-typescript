let myMap = new Map<string, number>(); // create empty Map

// creating map with initial key-value pairs
let myMapNew = new Map<string, string>([
  ["key1", "value1"],
  ["key2", "value2"],
]);

// Map operations
let nameAgeMapping = new Map<string, number>();

// 1. Add entries
nameAgeMapping.set("Zilong", 37);
nameAgeMapping.set("Layla", 22);
nameAgeMapping.set("Gord", 40);
console.log(nameAgeMapping);

// 2. Get entries
let age = nameAgeMapping.get("Gord");
console.log(age);

// 3. Check entry by Key
console.log(nameAgeMapping.has("Zilong"));
console.log(nameAgeMapping.has("Nana"));

// 4. Size of the Map
let count = nameAgeMapping.size;
console.log(count);

// 5. Delete an entry
let isDeleted = nameAgeMapping.delete("Layla");
console.log(nameAgeMapping);

// 6. Clear whole Map
nameAgeMapping.clear();
console.log(nameAgeMapping);

// Iterating over Map
let schoolStudentsMap = new Map<string, number>();

schoolStudentsMap.set("Terizla", 38);
schoolStudentsMap.set("Selena", 28);
schoolStudentsMap.set("Bruno", 21);

// 1. Iterate over map keys
for (const key of schoolStudentsMap.keys()) {
  console.log(key);
}

// 2. Iterate over map values
for (const value of schoolStudentsMap.values()) {
  console.log(value);
}

// 3. Iterate over map entries
for (const [name, age] of schoolStudentsMap.entries()) {
  console.log(`Student name: ${name} \t\tAge: ${age}`);
}

const question = new Map<any, any>([
  ["question", "What is the best programming language in the world"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again"],
]);
console.log(question);
