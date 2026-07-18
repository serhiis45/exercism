const ORDINAL_SUFFIXES = [
  [1, "st"],
  [2, "nd"],
  [3, "rd"],
] as const;

const ORDINAL_EXCEPTIONS = [11, 12, 13];

export function format(name: string, number: number): string {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;
  const isException = ORDINAL_EXCEPTIONS.includes(lastTwoDigits);

  const [, suffix] = ORDINAL_SUFFIXES.find(
    ([num]) => lastDigit === num && !isException,
  ) ?? [null, "th"];

  return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`;
}
