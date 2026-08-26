const ALPHABET = [..."abcdefghijklmnopqrstuvwxyz"];

export function isPangram(input: string): boolean {
  const normalizedString = input.toLowerCase();
  return ALPHABET.every((letter) => normalizedString.includes(letter));
}
