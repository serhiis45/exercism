const normalizeString = item => item.toLowerCase().split('').sort().join('');

export const findAnagrams = (string, array) => {
  return array.filter((item) => (
    item.toLowerCase() !== string.toLowerCase()
    && normalizeString(item) === normalizeString(string)
    )
  );
};
