export const reverseString = (string) => {
  return [...new Intl.Segmenter().segment(string)]
    .map((item) => item.segment)
    .reverse()
    .join('');
};
