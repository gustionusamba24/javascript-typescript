class Box<T> {
  contents: T;
  constructor(value: T) {
    this.contents = value;
  }
}

const box1 = new Box("Mantap");
const box2 = new Box(24);

