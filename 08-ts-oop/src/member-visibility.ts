class Sambutan {
  public greet() {
    console.log(`Hello, ${this.getName()}`);
  }

  protected getName() {
    return "hi";
  }
}

class SambutanSpesial extends Sambutan {
  public howdy() {
    console.log(`Howdy, ${this.getName()}`);
  }
}

const s = new Sambutan();
s.greet();

const ss = new SambutanSpesial();
ss.howdy();

class Rahasia {
  private x = 0;
}

// class Turunan extends Rahasia {
//   showX() {
//     console.log(this.x);
//   }
// }
// const r = new Rahasia();
// console.log(r.x);

// cross-instance private access
class A {
  private x = 10;

  public sameAs(other: A) {
    other.x === this.x;
  }
}
