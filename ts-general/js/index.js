"use strict";

const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperroni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue = [];

// Challenge: Add a utility function "addNewPizza" that takes a pizza object and adds it to the menu

const addNewPizza = function (pizzaObj) {
  menu.push(pizzaObj);
};
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Meat Feast", price: 20 });
addNewPizza({ name: "Spicy Sausage", price: 15 });

const placeOrder = function (pizzaName) {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  cashInRegister += selectedPizza.price;
  const newOrder = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
};

console.log(placeOrder("Margherita"));
console.log(placeOrder("Veggie"));
console.log(placeOrder("Meat Feast"));

const completeOrder = function (orderId) {
  const selectedOrder = orderQueue.find((order) => order.id === orderId);
  selectedOrder.status = "completed";
  return selectedOrder;
};

console.log(completeOrder(1));
console.log(completeOrder(2));
console.log(completeOrder(3));

console.log(menu);
console.log(cashInRegister);
console.log(orderQueue);
