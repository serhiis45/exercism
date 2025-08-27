const errors = {
  empty: 'series cannot be empty',
  zero: 'slice length cannot be zero',
  negative: 'slice length cannot be negative',
  tooBig: 'slice length cannot be greater than series length'
}

export class Series {
  #string;
  #stringLength;

  constructor(string) {
    if(!string) throw new Error(errors.empty)
    this.#string = [...string].map(item => Number(item));
    this.#stringLength = this.#string.length;
  }

  slices(sliceLength) {
    if (this.#stringLength < sliceLength) throw new Error(errors.tooBig);
    if (sliceLength === 0) throw new Error(errors.zero);
    if (sliceLength < 0) throw new Error(errors.negative);

    return Array.from({ length: this.#stringLength - sliceLength + 1 },
      (_, i) => this.#string.slice(i, i + sliceLength))
  }
}

