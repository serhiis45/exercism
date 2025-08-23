const normalizeString = item => [...item.toLowerCase()].sort().join('');

export const findAnagrams = (word, potentialAnagrams) => {
  return potentialAnagrams.filter(candidate => (
    candidate.toLowerCase() !== word.toLowerCase()
    && normalizeString(candidate) === normalizeString(word)
    )
  );
};
