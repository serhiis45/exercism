
export const steps = (number) => {
  if (number <= 0) throw new Error('Only positive integers are allowed');

  if (number === 1) {
    return 0;
  }

  const next = isEven(number)
    ? number / 2
    : 3 * number + 1;

  return 1 + steps(next);
};

const isEven = number => number % 2 === 0;