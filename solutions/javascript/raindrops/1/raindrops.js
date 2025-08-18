export const convert = (number) => {
  if(!(isDivisibleBy3(number) || isDivisibleBy5(number) || isDivisibleBy7(number))) {
    return `${number}`;
  }

  let string = '';
  if( isDivisibleBy3(number) ) {
    string += 'Pling';
  }
  if(isDivisibleBy5(number)) {
    string += 'Plang';
  }
  if(isDivisibleBy7(number)) {
    string += 'Plong';
  }
  return string;
};


const isDivisible = divisor => number => number % divisor === 0;
const isDivisibleBy3 = isDivisible(3);
const isDivisibleBy5 = isDivisible(5);
const isDivisibleBy7 = isDivisible(7);
