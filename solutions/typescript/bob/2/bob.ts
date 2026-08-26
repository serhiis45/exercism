const ALPHABET = [..."abcdefghijklmnopqrstuvwxyz"];
function hasLetter(input: string) {
  const inputSet = new Set(input.toLowerCase());
  return ALPHABET.some((letter) => inputSet.has(letter));
}
const isUpperCase = (value: string) => value === value.toUpperCase();
const getLastChar = (value: string) => value[value.length - 1];
const isYell = (value: string) =>
  isUpperCase(value) && getLastChar(value) === "?" && hasLetter(value);

export function hey(message: string): string {
  const trimmed = message.trim();

  return trimmed === ""
    ? "Fine. Be that way!"
    : isYell(trimmed)
      ? "Calm down, I know what I'm doing!"
      : getLastChar(trimmed) === "?"
        ? "Sure."
        : isUpperCase(trimmed) && hasLetter(trimmed)
          ? "Whoa, chill out!"
          : "Whatever.";
}
