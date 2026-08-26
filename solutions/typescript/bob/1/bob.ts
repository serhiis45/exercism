const ALPHABET = [..."abcdefghijklmnopqrstuvwxyz"];
function hasLetter(input: string) {
  const inputSet = new Set(input.toLowerCase());
  return ALPHABET.some((letter) => inputSet.has(letter));
}
const isUpperCase = (value: string) => value === value.toUpperCase();

export function hey(message: string): string {
  const trimmed = message.trim();

  if (trimmed === "") return "Fine. Be that way!";
  if (
    isUpperCase(trimmed) &&
    trimmed[trimmed.length - 1] === "?" &&
    hasLetter(trimmed)
  )
    return "Calm down, I know what I'm doing!";
  if (trimmed[trimmed.length - 1] === "?") return "Sure.";
  if (isUpperCase(trimmed) && hasLetter(trimmed)) return "Whoa, chill out!";

  return "Whatever.";
}
