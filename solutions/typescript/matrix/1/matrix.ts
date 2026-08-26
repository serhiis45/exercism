export class Matrix {
  readonly rows: number[][];
  readonly columns: number[][];

  constructor(matrix: string) {
    this.rows = matrix.split("\n").map((row) => row.split(" ").map(Number));
    this.columns = this.rows[0].map((_, i) => this.rows.map((row) => row[i]));
  }
}
