export const isLeap = (year) => {
  return divisibleBy(year, 4) &&
    (!divisibleBy(year, 100) || divisibleBy(year, 400));
}

const divisibleBy = (x, n) => x % n === 0;
