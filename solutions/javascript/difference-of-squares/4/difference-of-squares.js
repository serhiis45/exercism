const range = number => Array.from({length: number}, (_, i) => i + 1);
const add = (accumulator, a) => accumulator + a;
const addPowered = (accumulator, a) => accumulator + Math.pow(a, 2);

export class Squares {
  #number;

  constructor(number) {
    this.#number = number;
  }

  get sumOfSquares() {
    return (this.number * (this.number + 1) * ((this.number * 2) + 1)) / 6
  }

  get squareOfSum() {
    return Math.pow(
      range(this.#number)
        .reduce(add, 0),
      2);
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
