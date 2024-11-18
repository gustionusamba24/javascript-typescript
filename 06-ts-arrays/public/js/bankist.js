"use strict";
const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111,
};
const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};
const account3 = {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};
const account4 = {
    owner: "Sarah Smith",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};
const accounts = [account1, account2, account3, account4];
// Element
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTime = document.querySelector(".timer");
const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");
const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");
const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");
const displayMovements = function (movements, sort = false) {
    containerMovements.innerHTML = " ";
    // We use slice to create a shallow copy of the array
    const movs = sort
        ? movements.slice().sort((a, b) => a - b)
        : movements;
    movs.forEach(function (mov, i) {
        const type = mov > 0 ? "deposit" : "withdrawal";
        const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}
        </div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;
        containerMovements === null || containerMovements === void 0 ? void 0 : containerMovements.insertAdjacentHTML("afterbegin", html);
    });
};
const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
    labelBalance.textContent = `${acc.balance}€`;
};
const calcDisplaySummary = function (acc) {
    const income = acc.movements
        .filter((mov) => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${income}€`;
    const outcome = acc.movements
        .filter((mov) => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(outcome)}€`;
    const interest = acc.movements
        .filter((mov) => mov > 0)
        .map((deposit) => (deposit * acc.interestRate) / 100)
        .filter((int) => int > 1)
        .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest}€`;
};
const createUsername = function (accs) {
    accs.forEach((acc) => {
        acc.username = acc.owner
            .toLowerCase()
            .split(" ")
            .map((name) => name[0])
            .join("");
    });
};
createUsername(accounts);
const updateUI = function (acc) {
    // Display movements
    displayMovements(acc.movements);
    // Display balance
    calcDisplayBalance(acc);
    // Display summary
    calcDisplaySummary(acc);
};
let currentAccount;
btnLogin === null || btnLogin === void 0 ? void 0 : btnLogin.addEventListener("click", function (e) {
    e.preventDefault();
    const foundAccount = accounts.find((acc) => acc.username === inputLoginUsername.value);
    if ((foundAccount === null || foundAccount === void 0 ? void 0 : foundAccount.pin) === Number(inputLoginPin.value)) {
        currentAccount = foundAccount;
        // Display UI and welcome message
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]}`;
        containerApp.style.opacity = "100";
        // Clear the input field
        inputLoginUsername.value = inputLoginPin.value = "";
        inputLoginPin.blur();
        updateUI(currentAccount);
    }
});
btnTransfer === null || btnTransfer === void 0 ? void 0 : btnTransfer.addEventListener("click", function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find((acc) => acc.username === inputTransferTo.value);
    inputTransferAmount.value = inputTransferTo.value = "";
    if (amount > 0 &&
        receiverAcc &&
        currentAccount.balance >= amount &&
        receiverAcc.username !== (currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.username)) {
        // Doing transfer
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);
        // Update the UI
        updateUI(currentAccount);
    }
});
btnLoan === null || btnLoan === void 0 ? void 0 : btnLoan.addEventListener("click", function (e) {
    e.preventDefault();
    const amount = Number(inputLoanAmount.value);
    if (amount > 0 &&
        currentAccount.movements.some((mov) => mov >= amount * 0.1)) {
        // Add the movement
        currentAccount.movements.push(amount);
        // Update the UI
        updateUI(currentAccount);
    }
    inputLoanAmount.value = "";
});
btnClose === null || btnClose === void 0 ? void 0 : btnClose.addEventListener("click", function (e) {
    e.preventDefault();
    if (inputCloseUsername.value === currentAccount.username &&
        Number(inputClosePin.value) === currentAccount.pin) {
        const index = accounts.findIndex((acc) => acc.username === currentAccount.username);
        // Delete the account
        accounts.splice(index, 1);
        // Hide the UI
        containerApp.style.opacity = "0";
    }
    inputCloseUsername.value = inputClosePin.value = "";
});
let sorted = false;
btnSort === null || btnSort === void 0 ? void 0 : btnSort.addEventListener("click", function (e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
});
