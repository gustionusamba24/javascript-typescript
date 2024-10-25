"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    displayProduct() {
        console.log(`Product: ${this.name}, Price: ${this.price}`);
    }
}
class Electronic extends Product {
    constructor(name, price, warranty) {
        super(name, price);
        this.warranty = warranty;
    }
    displayElectronic() {
        super.displayProduct();
        console.log(`Warranty: ${this.warranty} years`);
    }
}
const electronic1 = new Electronic("Smartphone", 4000000, 2);
console.log(electronic1);
electronic1.displayElectronic();
// electronic1.displayProduct();
// const product1 = new Product("Laptop", 20000000);
// const product2 = new Product("Handphone", 8000000);
// console.log(product1);
// console.log(product2);
// product1.displayProduct();
// product2.displayProduct();
