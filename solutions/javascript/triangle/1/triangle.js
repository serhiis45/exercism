export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  get isEquilateral() {
    return (this.#isValidTriangle(this.sides))
      && (new Set(this.sides).size === 1);
  }

  get isIsosceles() {
    return ( this.#isValidTriangle(this.sides) )
      && ( new Set(this.sides).size <= 2 );
  }

  get isScalene() {
    return this.#isValidTriangle(this.sides)
      && (new Set(this.sides).size === 3) ;
  }

  #isValidTriangle(sides) {
     return sides.every(this.#isMoreThanZero) && this.#isUnequal(sides);
  }

  #isMoreThanZero(number) {
    return number > 0;
  }

  #isUnequal(sides) {
    return sides[0] <= sides[1] + sides[2]
      && sides[1] <= sides[0] + sides[2]
      && sides[2] <= sides[0] + sides[1]
  }
}
