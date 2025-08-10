const ALL_ENGLISH_LETTERS = 'abcdefghijklmnopqrstuvwxyz';

export const isPangram = (string) => [...ALL_ENGLISH_LETTERS].every(letter => string.toLowerCase().includes(letter));

