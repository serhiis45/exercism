
// export const reverseString = (string) => {
//   const reversedObject = [...new Intl.Segmenter().segment(string)].reverse();
//
//   return reversedObject.map((item) => item.segment).join('');
// };

export const reverseString = (string) => {
  const reversedObject = [...new Intl.Segmenter().segment(string)].reverse();

  return [...new Intl.Segmenter().segment(string)].map((item) => item.segment).reverse().join('');
};
