export class BankAccount {
  static #isNegative = number => number < 0;

  #balance = 0;
  #isClosed = null;

  constructor() {}

  open() {
    if (this.#isClosed === null || this.#isClosed === true) {
      this.#isClosed = false;
      this.#balance = 0;
    } else {
      throw  new ValueError;
    }
  }

  close() {
    if(this.#isClosed === null){
      throw new ValueError();
    } else {
      this.#isClosed = true;
    }

  }

  deposit(value) {
    if (this.#isClosed || this.#isClosed === null || BankAccount.#isNegative(value)) {
      throw new ValueError();
    } else {
      this.#balance += value;
    }
  }

  withdraw(value) {
    if (this.#isClosed || this.#balance < value || BankAccount.#isNegative(value)) {
      throw new ValueError();
    } else {
      this.#balance -= value;
    }
  }

  get balance() {
    if (this.#isClosed) {
      throw new ValueError();
    } else {
      return this.#balance;
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
