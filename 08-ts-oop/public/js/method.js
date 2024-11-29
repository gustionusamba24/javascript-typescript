"use strict";
class Angka {
    constructor() {
        this.x = 10;
        this.y = 10;
    }
    scale(n) {
        this.x *= n;
        this.y *= n;
    }
}
let x = 0;
class C {
    constructor() {
        this.x = "hello";
    }
    m() {
        // This is trying to modify 'x' from line 1, not the class property
        // x = "world"; // accessing x for number type
    }
}
class CB {
    constructor() {
        this._length = 0;
    }
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}
class Thing {
    constructor() {
        this._size = 0;
    }
    get size() {
        return this._size;
    }
    set size(value) {
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
