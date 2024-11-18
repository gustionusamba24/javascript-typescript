type Account = {
  owner: string;
  movements: number[];
  interestRate: number;
  pin: number;
  username?: string;
  balance?: number;
};

const account1: Account = {
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

const accounts: Account[] = [account1, account2, account3, account4];

// Element
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTime = document.querySelector(".timer");

const containerApp: HTMLElement = document.querySelector(".app") as HTMLElement;
const containerMovements: HTMLElement = document.querySelector(
  ".movements"
) as HTMLElement;

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername: HTMLInputElement = document.querySelector(
  ".login__input--user"
) as HTMLInputElement;
const inputLoginPin: HTMLInputElement = document.querySelector(
  ".login__input--pin"
) as HTMLInputElement;
const inputTransferTo: HTMLInputElement = document.querySelector(
  ".form__input--to"
) as HTMLInputElement;
const inputTransferAmount: HTMLInputElement = document.querySelector(
  ".form__input--amount"
) as HTMLInputElement;
const inputLoanAmount: HTMLInputElement = document.querySelector(
  ".form__input--loan-amount"
) as HTMLInputElement;
const inputCloseUsername: HTMLInputElement = document.querySelector(
  ".form__input--user"
) as HTMLInputElement;
const inputClosePin: HTMLInputElement = document.querySelector(
  ".form__input--pin"
) as HTMLInputElement;

const displayMovements = function (movements: number[]): void {
  containerMovements!.innerHTML = " ";
  movements.forEach(function (mov: number, i: number): void {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}
        </div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements?.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc: Account): void {
  acc.balance = acc.movements.reduce(
    (acc: number, cur: number): number => acc + cur,
    0
  );

  labelBalance!.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc: Account): void {
  const income = acc.movements
    .filter((mov: number): boolean => mov > 0)
    .reduce((acc: number, mov: number): number => acc + mov, 0);
  labelSumIn!.textContent = `${income}€`;

  const outcome = acc.movements
    .filter((mov: number): boolean => mov < 0)
    .reduce((acc: number, mov: number): number => acc + mov, 0);
  labelSumOut!.textContent = `${Math.abs(outcome)}€`;

  const interest = acc.movements
    .filter((mov: number): boolean => mov > 0)
    .map((deposit: number): number => (deposit * acc.interestRate) / 100)
    .filter((int: number): boolean => int > 1)
    .reduce((acc: number, int: number): number => acc + int, 0);
  labelSumInterest!.textContent = `${interest}€`;
};

const createUsername = function (accs: Account[]): void {
  accs.forEach((acc: Account): void => {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name: string): string => name[0])
      .join("");
  });
};
createUsername(accounts);

const updateUI = function (acc: Account): void {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

let currentAccount: Account;

btnLogin?.addEventListener("click", function (e: Event): void {
  e.preventDefault();

  const foundAccount = accounts.find(
    (acc: Account): boolean => acc.username === inputLoginUsername.value
  );

  if (foundAccount?.pin === Number(inputLoginPin.value)) {
    currentAccount = foundAccount;
    // Display UI and welcome message
    labelWelcome!.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = "100";

    // Clear the input field
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer?.addEventListener("click", function (e: Event): void {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc: Account): boolean => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance! >= amount &&
    receiverAcc.username !== currentAccount?.username
  ) {
    // Doing transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update the UI
    updateUI(currentAccount);
  }
});

btnLoan?.addEventListener("click", function (e: Event): void {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov: number): boolean => mov >= amount * 0.1)
  ) {
    // Add the movement
    currentAccount.movements.push(amount);

    // Update the UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose?.addEventListener("click", function (e: Event): void {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc: Account): boolean => acc.username === currentAccount.username
    );

    // Delete the account
    accounts.splice(index, 1);

    // Hide the UI
    containerApp.style.opacity = "0";
  }
  inputCloseUsername.value = inputClosePin.value = "";
});
