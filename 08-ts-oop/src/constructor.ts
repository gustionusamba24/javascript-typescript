class Poin {
  x: number;
  y: number;

  //   Normal signature with defaults
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

class Poin2 {
  x: number = 0;
  y: number = 0;

  // Constructor overloads
  constructor(x: number, y: number);
  constructor(xy: string);
  constructor(x: string | number, y: number = 0) {
    // Code logic here
  }
}

class Base {
  k = 4;
}

class Derived extends Base {
  constructor() {
    super();
  }
}
