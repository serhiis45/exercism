export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

export const decodedValue = (colorsArray) => Number(`${COLORS.indexOf(colorsArray[0])}${COLORS.indexOf(colorsArray[1])}`);
