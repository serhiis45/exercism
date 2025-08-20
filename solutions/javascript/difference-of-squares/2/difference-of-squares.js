const range = number => Array.from({length: number}, (_, i) => i + 1);
const add = (accumulator, a) => accumulator + a;
const addPowered = (accumulator, a) => accumulator + Math.pow(a, 2);

export class Squares {
  #number;

  constructor(number) {
    this.#number = number;
  }

  get sumOfSquares() {
    return range(this.#number)
      .reduce(addPowered, 0);
  }

  get squareOfSum() {
    return 2 **
      range(this.#number)
        .reduce(add, 0);
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
