
export class Matrix {
  constructor(matrix) {
    this.matrix = matrix.split('\n');
  }

  get rows() {
    return this.matrix.map(row => row.split(' ').map(Number));
  }

  get columns() {
    return this.rows[0].map((element, i) => {
      return this.rows.map(row => row[i]);
    })
  }
}
