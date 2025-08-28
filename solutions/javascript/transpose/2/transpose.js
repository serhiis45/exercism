const getStringLength = x => x.length;

const getColumnsCount = matrix =>
  Math.max(0, ...matrix.map(getStringLength));

const getCharOrPad = (columnIndex, acc, row) =>
  row[columnIndex] || (acc ? " " : "");

const buildColumnAt = (matrix, columnIndex) =>
  matrix.reduceRight(
    (acc, row) => getCharOrPad(columnIndex, acc, row)  + acc,
    ""
  );


export const transpose = matrix =>
  Array.from(
    {length: getColumnsCount(matrix)},
    (_, columnIndex) => buildColumnAt(matrix, columnIndex)
  );
