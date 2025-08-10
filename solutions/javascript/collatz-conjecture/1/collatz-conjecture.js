
export const steps = (number) => {
  if (number <= 0) throw new Error('Only positive integers are allowed');

  let stepNumber = number;
  let count = 0;

  while (stepNumber !== 1) {
    count++;
    if(isEven(stepNumber)) {
      stepNumber /= 2;
      continue;
    }
    stepNumber = stepNumber * 3 + 1;
  }

  return count;
};

const isEven = number => number % 2 === 0;