const ALL_ENGLISH_LETTERS = 'abcdefghijklmnopqrstuvwxyz';
const ALL_ENGLISH_LETTERS_ARRAY = ALL_ENGLISH_LETTERS.split('');

export const isPangram = (string) => {
  let array = string
    .toLowerCase()
    .split('')
    .filter(item => ALL_ENGLISH_LETTERS_ARRAY.includes(item))
    .sort();

  return Array.from(new Set(array)).join('') === ALL_ENGLISH_LETTERS;
};
