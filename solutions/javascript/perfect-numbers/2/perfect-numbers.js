const range = number => Array.from({length: number}, (_, i) => i + 1);
const isFactor = (elem, idx, array) => (array.length % elem === 0 && elem !== array.length);
const add = (accumulator, a) => accumulator + a;
const getAliqoutSum = number => range(number)
  .filter(isFactor)
  .reduce(add, 0)

const PERFECTABILITY = new Map([
  [-1, 'deficient'],
  [0, 'perfect'],
  [1, 'abundant' ]
])

export const classify = (number) => {
  if(number <= 0) throw new Error('Classification is only possible for natural numbers.');

  return  PERFECTABILITY.get(Math.sign(getAliqoutSum(number) - number));
};
