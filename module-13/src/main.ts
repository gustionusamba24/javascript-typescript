class Animal {
  makeSound(): void {
    console.log("Some generic animal sound");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Bark");
  }
}

class Wolf extends Animal {
  makeSound(): void {
    console.log("Woof");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Miaw");
  }
}

const herder = new Dog();
herder.makeSound();

const wolf = new Wolf();
wolf.makeSound();

const persia = new Cat();
persia.makeSound();
