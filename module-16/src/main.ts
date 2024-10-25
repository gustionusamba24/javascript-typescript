abstract class Animal {
  abstract makeSound(): void;
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Bark");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Miaw");
  }
}
