export class BankAccount {
  static #isNegative = number => number < 0;
  static #isUndefined = value => typeof value === 'undefined';
  #balance = undefined;

  constructor() {}

  open() {
    if (!BankAccount.#isUndefined(this.#balance)) throw  new ValueError;
    this.#balance = 0;
  }

  close() {
    if (BankAccount.#isUndefined(this.#balance)) throw new ValueError();
    this.#balance = undefined;
  }

  deposit(amount) {
    if (BankAccount.#isUndefined(this.#balance) || BankAccount.#isNegative(amount)) throw new ValueError();
    this.#balance += amount;
  }

  withdraw(amount) {
    if (BankAccount.#isUndefined(this.#balance) || amount > this.#balance || BankAccount.#isNegative(amount)) {
      throw new ValueError();
    }
    this.#balance -= amount;

  }

  get balance() {
    if (BankAccount.#isUndefined(this.#balance)) throw new ValueError();
    return this.#balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}

