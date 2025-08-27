
export class Series {
  #series;
  constructor(series) {
    this.#series = series.split('').map(item => Number(item));
  }

  slices(sliceLength) {
    if (this.#series.length === 0) throw new Error('series cannot be empty');
    if (this.#series.length < sliceLength) throw new Error('slice length cannot be greater than series length');
    if (sliceLength === 0) throw new Error('slice length cannot be zero');
    if (sliceLength < 0) throw new Error('slice length cannot be negative');

    let arr = [];
    let subArr = [];
    for (let i = 0; i <= this.#series.length; i++) {
      subArr = this.#series.slice(i, sliceLength + i);
      if (subArr.length === sliceLength) arr.push(subArr);
      subArr = [];
    }

    return arr;
  }
}

