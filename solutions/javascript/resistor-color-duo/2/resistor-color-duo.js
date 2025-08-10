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

export const decodedValue = (colors) =>
  Number(
    colors
      .slice(0, 2)
      .map(color => COLORS.indexOf(color))
      .join(''));
