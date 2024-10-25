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
const product1 = new Product("Laptop", 20000000);
const product2 = new Product("Handphone", 8000000);
console.log(product1);
console.log(product2);
product1.displayProduct();
product2.displayProduct();
