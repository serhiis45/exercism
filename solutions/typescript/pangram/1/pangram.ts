export const isPangram = (string: string) =>
  [..."abcdefghijklmnopqrstuvwxyz"].every((letter) =>
    string.toLocaleLowerCase().includes(letter),
  );
