export class Triangle {
  static #isValidTriangle(sides) {
    const [side1, side2, side3] = sides.sort((a, b) => a - b);
    return sides.every(n => n > 0) && side1 + side2 >= side3;
  }

  #isEquilateral = false;
  #isIsosceles = false;
  #isScalene = false;

  constructor(...sides) {
    if(Triangle.#isValidTriangle(sides)) {
      const uniqueSideCount = new Set(sides).size;

      this.#isEquilateral = uniqueSideCount === 1;
      this.#isIsosceles = uniqueSideCount <= 2;
      this.#isScalene = uniqueSideCount === 3;
    }
  }

  get isEquilateral() {
    return this.#isEquilateral;
  }

  get isIsosceles() {
    return this.#isIsosceles;
  }

  get isScalene() {
    return this.#isScalene;
  }
}
