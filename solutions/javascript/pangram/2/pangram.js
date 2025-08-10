const ALL_ENGLISH_LETTERS = 'abcdefghijklmnopqrstuvwxyz';

export const isPangram = (string) => {
 const lowercaseString = string.toLowerCase();

  return [...ALL_ENGLISH_LETTERS].every(letter => lowercaseString.includes(letter));
};
