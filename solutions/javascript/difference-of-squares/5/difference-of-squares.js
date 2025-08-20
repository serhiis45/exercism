export class Squares {
  #number;

  constructor(number) {
    this.#number = number;
  }

  get sumOfSquares() {
    return (this.#number * (this.#number + 1) * ((this.#number * 2) + 1)) / 6;
  }

  get squareOfSum() {
    return ((this.#number * (this.#number + 1)) / 2) ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
