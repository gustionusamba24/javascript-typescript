"use strict";
class Poin {
    x;
    y;
    //   Normal signature with defaults
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}
class Poin2 {
    x = 0;
    y = 0;
    constructor(x, y = 0) {
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
