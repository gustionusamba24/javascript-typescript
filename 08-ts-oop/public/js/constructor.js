"use strict";
class Poin {
    //   Normal signature with defaults
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}
class Poin2 {
    constructor(x, y = 0) {
        this.x = 0;
        this.y = 0;
        // Code logic here
    }
}
class Base {
    constructor() {
        this.k = 4;
    }
}
class Derived extends Base {
    constructor() {
        super();
    }
}
