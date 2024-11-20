"use strict";
const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2,
    pin: 1111,
    movementsDates: [
        "2019-11-18T21:31:17.178Z",
        "2019-12-23T07:42:02.383Z",
        "2020-01-28T09:15:04.904Z",
        "2020-04-01T10:17:24.185Z",
        "2020-05-08T14:11:59.604Z",
        "2020-05-27T17:01:17.194Z",
        "2020-07-11T23:36:17.929Z",
        "2020-07-12T10:51:36.790Z",
    ],
    currency: "EUR",
    locale: "pt-PT", // de-DE
};
const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
    movementsDates: [
        "2019-11-01T13:15:33.035Z",
        "2019-11-30T09:48:16.867Z",
        "2019-12-25T06:04:23.907Z",
        "2020-01-25T14:18:46.235Z",
        "2020-02-05T16:33:06.386Z",
        "2020-04-10T14:43:26.374Z",
        "2020-06-25T18:49:59.371Z",
        "2020-07-26T12:01:20.894Z",
    ],
    currency: "USD",
    locale: "en-US",
};
const accounts = [account1, account2];
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");
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
        containerMovements.insertAdjacentHTML("afterbegin", html);
    });
};
const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
    if (labelBalance)
        labelBalance.textContent = `${acc.balance}€`;
};
const calcDisplaySummary = function (acc) {
    const income = acc.movements
        .filter((mov) => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    if (labelSumIn)
        labelSumIn.textContent = `${income}€`;
    const outcome = acc.movements
        .filter((mov) => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    if (labelSumOut)
        labelSumOut.textContent = `${Math.abs(outcome)}€`;
    const interest = acc.movements
        .filter((mov) => mov > 0)
        .map((deposit) => (deposit * acc.interestRate) / 100)
        .filter((int) => int > 1)
        .reduce((acc, int) => acc + int, 0);
    if (labelSumInterest)
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
btnLogin.addEventListener("click", function (e) {
    e.preventDefault();
    const foundAccount = accounts.find((acc) => acc.username === inputLoginUsername.value);
    if (!foundAccount) {
        console.error("Account not found");
        return;
    }
    if (foundAccount.pin === +inputLoginPin.value) {
        currentAccount = foundAccount;
        // Display UI and welcome message
        if (labelWelcome) {
            labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]}`;
        }
        containerApp.style.opacity = "100";
        // Clear the input field
        inputLoginUsername.value = inputLoginPin.value = "";
        inputLoginPin.blur();
        updateUI(currentAccount);
    }
});
btnTransfer.addEventListener("click", function (e) {
    e.preventDefault();
    const amount = +inputTransferAmount.value;
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
btnLoan.addEventListener("click", function (e) {
    e.preventDefault();
    const amount = +inputLoanAmount.value;
    if (amount > 0 &&
        currentAccount.movements.some((mov) => mov >= amount * 0.1)) {
        // Add the movement
        currentAccount.movements.push(amount);
        // Update the UI
        updateUI(currentAccount);
    }
    inputLoanAmount.value = "";
});
btnClose.addEventListener("click", function (e) {
    e.preventDefault();
    if (inputCloseUsername.value === currentAccount.username &&
        +inputClosePin.value === currentAccount.pin) {
        const index = accounts.findIndex((acc) => acc.username === currentAccount.username);
        // Delete the account
        accounts.splice(index, 1);
        // Hide the UI
        containerApp.style.opacity = "0";
    }
    inputCloseUsername.value = inputClosePin.value = "";
});
let sorted = false;
btnSort.addEventListener("click", function (e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
});
