"use strict";
class Animal {
    makeSound() {
        console.log("Some generic animal sound");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Bark");
    }
}
class Wolf extends Animal {
    makeSound() {
        console.log("Woof");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Miaw");
    }
}
const herder = new Dog();
herder.makeSound();
const wolf = new Wolf();
wolf.makeSound();
const persia = new Cat();
persia.makeSound();
