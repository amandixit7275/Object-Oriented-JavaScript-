function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  this.deposit = function (amount) {
    this.balance += amount;
  };
  this.withdraw = (amount) => {
    this.balance -= amount;
  };
}

// const vijayAccount = new BankAccount("vijay",2000)
// const anitAccount = new BankAccount("Anit", 1000);
// vijayAccount.deposit(5000);
// console.log(vijayAccount, anitAccount);

const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#customerName");
const InitialBalance = document.querySelector("#InitialBalance");

const depositForm = document.querySelector("#depositForm");
const accountNumber = document.querySelector("#accountNumber");
const amount = document.querySelector("#amount");

let accounts = [];

accountForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = new BankAccount(customerName.value, +InitialBalance.value);
  accounts.push(account);
  console.log(accounts);
});

depositForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = accounts.find(
    (account) => account.accountNumber === +accountNumber.value
  );
  account.deposit(+amount.value);
  console.log(accounts);
});
