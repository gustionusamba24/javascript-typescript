class Calculator {
  static pi: number = 3.14;

  static calculateArea(radius: number): number {
    return Calculator.pi * radius ** 2;
  }
}

console.log(Calculator.calculateArea(10));
