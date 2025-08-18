const RAINDROPS = [
  { factor: 3, sound: 'Pling' },
  { factor: 5, sound: 'Plang' },
  { factor: 7, sound: 'Plong' }
]

const isDivisible = divisor => number => number % divisor === 0;

export const convert = (number) => {
  return RAINDROPS
    .filter(drop => isDivisible(drop.factor)(number))
    .map(drop => drop.sound)
    .join('') ||
    number.toString();
};
