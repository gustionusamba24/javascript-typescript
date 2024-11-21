type Account = {
  owner: string;
  movements: number[];
  interestRate: number;
  pin: number;
  username?: string;
  balance?: number;
  movementsDates: string[];
  currency: string;
  locale: string;
};

const account1: Account = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2,
  pin: 1111,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2024-10-15T14:11:59.604Z",
    "2024-11-15T17:01:17.194Z",
    "2024-11-19T23:36:17.929Z",
    "2024-11-20T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2: Account = {
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

const accounts: Account[] = [account1, account2];

const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp: HTMLElement = document.querySelector(".app") as HTMLElement;
const containerMovements: HTMLElement = document.querySelector(
  ".movements"
) as HTMLElement;

const btnLogin: HTMLButtonElement = document.querySelector(
  ".login__btn"
) as HTMLButtonElement;
const btnTransfer: HTMLButtonElement = document.querySelector(
  ".form__btn--transfer"
) as HTMLButtonElement;
const btnLoan: HTMLButtonElement = document.querySelector(
  ".form__btn--loan"
) as HTMLButtonElement;
const btnClose: HTMLButtonElement = document.querySelector(
  ".form__btn--close"
) as HTMLButtonElement;
const btnSort: HTMLButtonElement = document.querySelector(
  ".btn--sort"
) as HTMLButtonElement;

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

const formatMovementDate = function (date: Date): string {
  const calcDaysPassed = (date1: any, date2: any) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    const day = `${date.getDate()}`.padStart(2, "0");
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
};

const displayMovements = function (acc: Account, sort: boolean = false): void {
  containerMovements.innerHTML = " ";

  // We use slice to create a shallow copy of the array
  const movs = sort
    ? acc.movements.slice().sort((a: number, b: number): number => a - b)
    : acc.movements;

  movs.forEach(function (mov: number, i: number): void {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date);

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}
          </div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${mov.toFixed(2)}€</div>
        </div>
      `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc: Account): void {
  acc.balance = acc.movements.reduce(
    (acc: number, cur: number): number => acc + cur,
    0
  );

  if (labelBalance) labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc: Account): void {
  const income = acc.movements
    .filter((mov: number): boolean => mov > 0)
    .reduce((acc: number, mov: number): number => acc + mov, 0);

  if (labelSumIn) labelSumIn.textContent = `${income.toFixed(2)}€`;

  const outcome = acc.movements
    .filter((mov: number): boolean => mov < 0)
    .reduce((acc: number, mov: number): number => acc + mov, 0);

  if (labelSumOut) labelSumOut.textContent = `${Math.abs(outcome).toFixed(2)}€`;

  const interest = acc.movements
    .filter((mov: number): boolean => mov > 0)
    .map((deposit: number): number => (deposit * acc.interestRate) / 100)
    .filter((int: number): boolean => int > 1)
    .reduce((acc: number, int: number): number => acc + int, 0);

  if (labelSumInterest)
    labelSumInterest.textContent = `${interest.toFixed(2)}€`;
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
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

let currentAccount: Account;

// Always logged in
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = "100";

btnLogin.addEventListener("click", function (e: Event): void {
  e.preventDefault();

  const foundAccount = accounts.find(
    (acc: Account): boolean => acc.username === inputLoginUsername.value
  );

  if (!foundAccount) {
    console.error("Account not found");
    return;
  }

  if (foundAccount.pin === +inputLoginPin.value) {
    currentAccount = foundAccount;
    // Display UI and welcome message
    if (labelWelcome) {
      labelWelcome.textContent = `Welcome back, ${
        currentAccount.owner.split(" ")[0]
      }`;
    }

    containerApp.style.opacity = "100";

    // Current date and time
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, "0");
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const year = now.getFullYear();
    const hours = `${now.getHours()}`.padStart(2, "0");
    const minutes = `${now.getMinutes()}`.padStart(2, "0");
    if (labelDate)
      labelDate.textContent = `${day}-${month}-${year}, ${hours}:${minutes}`;

    // Clear the input field
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e: Event): void {
  e.preventDefault();

  const amount = +inputTransferAmount.value;
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

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update the UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e: Event): void {
  e.preventDefault();

  const amount = Math.floor(+inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov: number): boolean => mov >= amount * 0.1)
  ) {
    // Add the movement
    currentAccount.movements.push(amount);

    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update the UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e: Event): void {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
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

let sorted = false;

btnSort.addEventListener("click", function (e: Event): void {
  e.preventDefault();

  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});
