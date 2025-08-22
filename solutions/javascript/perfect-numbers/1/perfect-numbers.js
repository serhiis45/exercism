const isFactor = (elem, idx, array) => (array.length % elem === 0 && elem !== array.length);
const range = number => Array.from({length: number}, (_, i) => i + 1);
const add = (accumulator, a) => accumulator + a;

export const classify = (number) => {
  if(number <= 0) throw new Error('Classification is only possible for natural numbers.');

  const aliqoutSum =
    range(number)
      .filter(isFactor)
      .reduce(add, 0)
  ;

  return aliqoutSum === number ? 'perfect' :
    aliqoutSum > number ? 'abundant' :
      'deficient'
};
