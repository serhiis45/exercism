const ALPHABET = [..."abcdefghijklmnopqrstuvwxyz"];

export function isPangram(input: string): boolean {
  const letters = new Set(input.toLowerCase());
  return ALPHABET.every((letter) => letters.has(letter));
}
