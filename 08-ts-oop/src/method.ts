class Angka {
  x = 10;
  y = 10;

  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}

let x: number = 0;

class C {
  x: string = "hello";

  m() {
    // This is trying to modify 'x' from line 1, not the class property
    // x = "world"; // accessing x for number type
  }
}

class CB {
  _length = 0;

  get length(): number {
    return this._length;
  }

  set length(value: number) {
    this._length = value;
  }
}

class Thing {
  _size = 0;

  get size(): number {
    return this._size;
  }

  set size(value: string | number | boolean) {
    let num = Number(value);

    // Don't allow Nan, Infinity, etc
    if (!Number.isFinite(num)) {
      this._size = 0;
      return;
    }

    this._size = num;
  }
}

const t = new Thing();
t.size = "invalid";
console.log(t.size);

t.size = true;
console.log(t.size);

t.size = "123454";
console.log(t.size);
