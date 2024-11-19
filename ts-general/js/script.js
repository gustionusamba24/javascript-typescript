"use strict";
let cashInRegister = 100;
let nextOrderId = 1;
let nextPizzaId = 1;
const menu = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperroni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
];
const orderQueue = [];
// Challenge: Add a utility function "addNewPizza" that takes a pizza object and adds it to the menu
const addNewPizza = function (pizzaObj) {
    const pizza = Object.assign({ id: nextPizzaId++ }, pizzaObj);
    menu.push(pizza);
    // pizzaObj.id = nextPizzaId++;
    // menu.push(pizzaObj);
};
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Meat Feast", price: 20 });
addNewPizza({ name: "Spicy Sausage", price: 15 });
const placeOrder = function (pizzaName) {
    const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`);
        return;
    }
    cashInRegister += selectedPizza.price;
    const newOrder = {
        id: nextOrderId++,
        pizza: selectedPizza,
        status: "ordered",
    };
    orderQueue.push(newOrder);
    return newOrder;
};
const completeOrder = function (orderId) {
    const selectedOrder = orderQueue.find((order) => order.id === orderId);
    if (!selectedOrder) {
        console.error(`${orderId} does not found in orderQueue`);
        return;
    }
    selectedOrder.status = "completed";
    return selectedOrder;
};
const getPizzaDetail = function (identifier) {
    if (typeof identifier === "string") {
        return menu.find((pizza) => pizza.name.toLowerCase() === identifier.toLowerCase());
    }
    else if (typeof identifier === "number") {
        return menu.find((pizza) => pizza.id === identifier);
    }
    else {
        throw new TypeError("Parameter `identifier` must be either a string or a number");
    }
};
function addToArray(array, item) {
    array.push(item);
    return array;
}
// example usage
addToArray(menu, {
    id: nextPizzaId++,
    name: "Chicken Bacon Ranch",
    price: 18,
});
addToArray(orderQueue, {
    id: nextOrderId++,
    pizza: menu[2],
    status: "completed",
});
placeOrder("Margherita");
placeOrder("Veggie");
placeOrder("Meat Feast");
completeOrder(1);
completeOrder(2);
console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
console.log(getPizzaDetail(7));
