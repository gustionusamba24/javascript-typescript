class MyClass {
  static r = 7;
  static circleArea() {
    return Math.PI * this.r ** 2;
  }
}

console.log(MyClass.r);
console.log(MyClass.circleArea());
