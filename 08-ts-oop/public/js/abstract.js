"use strict";
class Shape {
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
const circle = new Circle(10);
console.log(circle.radius);
console.log(circle.getArea());
