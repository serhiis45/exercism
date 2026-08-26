export const isPangram = (string: string) =>
  [..."abcdefghijklmnopqrstuvwxyz"].every((letter) =>
    string.toLowerCase().includes(letter),
  );
