export const isPangram = (string) => [...'abcdefghijklmnopqrstuvwxyz'].every(letter => string.toLowerCase().includes(letter));

