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
  owner: "Ruby Jane",
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
  currency: "IDR",
  locale: "id-ID", // de-DE
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

const formatMovementDate = function (date: Date, locale: string) {
  const calcDaysPassed = (date1: any, date2: any) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  return new Intl.DateTimeFormat(locale).format(date);
};
const formatCur = function (
  value: number,
  locale: string,
  currency: string
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
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
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}
          </div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formattedMov}</div>
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

  const formattedBalance = formatCur(acc.balance, acc.locale, acc.currency);

  if (labelBalance) labelBalance.textContent = `${formattedBalance}`;
};

const calcDisplaySummary = function (acc: Account): void {
  const income = acc.movements
    .filter((mov: number): boolean => mov > 0)
    .reduce((acc: number, mov: number): number => acc + mov, 0);

  const formattedIncome = formatCur(income, acc.locale, acc.currency);

  if (labelSumIn) labelSumIn.textContent = `${formattedIncome}`;

  const outcome = acc.movements
    .filter((mov: number): boolean => mov < 0)
    .reduce((acc: number, mov: number): number => acc + mov, 0);

  const formattedOutcome = formatCur(
    Math.abs(outcome),
    acc.locale,
    acc.currency
  );

  if (labelSumOut) labelSumOut.textContent = `${formattedOutcome}`;

  const interest = acc.movements
    .filter((mov: number): boolean => mov > 0)
    .map((deposit: number): number => (deposit * acc.interestRate) / 100)
    .filter((int: number): boolean => int > 1)
    .reduce((acc: number, int: number): number => acc + int, 0);

  const formattedInterest = formatCur(interest, acc.locale, acc.currency);

  if (labelSumInterest) labelSumInterest.textContent = `${formattedInterest}`;
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

const startLogoutTimer = function (): number {
  const tick = function (): void {
    const min = String(Math.trunc(time / 60)).padStart(2, "0");
    const sec = String(time % 60).padStart(2, "0");
    // In each call, print the remaining time to UI
    if (labelTimer) labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      if (labelWelcome) labelWelcome.textContent = "Log in to get started";
      containerApp.style.opacity = "0";
    }

    // Decrease it
    time--;
  };
  // Set time to 5 minutes
  let time = 30;

  // Call the timer every second
  tick(); // immediately call the function
  const timer = setInterval(tick, 1000);

  return timer;
};

let currentAccount: Account;
let timer: number;

// Always logged in
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = "100";

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

    if (labelDate)
      labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, {
        hour: "numeric",
        minute: "numeric",
        day: "numeric",
        month: "numeric",
        year: "numeric",
        weekday: "short",
      }).format(now);

    // Clear the input field
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Timer
    if (timer) clearInterval(timer);
    timer = startLogoutTimer();

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

    // Reset the timer
    clearInterval(timer);
    timer = startLogoutTimer();
  }
});

btnLoan.addEventListener("click", function (e: Event): void {
  e.preventDefault();

  const amount = Math.floor(+inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov: number): boolean => mov >= amount * 0.1)
  ) {
    setTimeout(() => {
      // Add the movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update the UI
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = "";

  // Reset the timer
  clearInterval(timer);
  timer = startLogoutTimer();
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
