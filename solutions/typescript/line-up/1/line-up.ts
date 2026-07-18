const suffixes = [
  [1, "st"],
  [2, "nd"],
  [3, "rd"],
] as const;

export function format(name: string, number: number): string {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  const [, suffix] = suffixes.find(
    ([suffixNum]) =>
      lastDigit === suffixNum && ![11, 12, 13].includes(lastTwoDigits),
  ) ?? [null, "th"];

  return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`;
}
