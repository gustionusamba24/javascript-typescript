class Person {
  private _age: number;

  constructor(_age: number) {
    this._age = _age;
  }

  public get age(): number {
    return this._age;
  }

  public set age(newAge: number) {
    if (newAge > 0) {
      this._age = newAge;
    } else {
      this._age = 0;
    }
  }
}

const person1 = new Person(24);
console.log(person1.age);

person1.age = 12;
console.log(person1.age);

person1.age = -10;
console.log(person1.age);
