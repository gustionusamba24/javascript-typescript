interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping(): void {
    console.log("ping");
  }
}

class Ball implements Pingable {
  ping(): void {
    console.log("ping");
  }

  pong() {
    console.log("pong");
  }
}

interface Checkable {
  check(name: string): boolean;
}

class NameChecker implements Checkable {
  check(name: string): boolean {
    return name.toLowerCase() === "ok";
  }
}

class Animal {
  move() {
    console.log("Moving along!");
  }
}

class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log("woof");
    }
  }
}

const d = new Dog();
d.move();
d.woof(10);

class Dasar {
  greet() {
    console.log("Hello World");
  }
}

class Warisan extends Dasar {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}

const w = new Warisan();
w.greet();
w.greet("Balmond");
