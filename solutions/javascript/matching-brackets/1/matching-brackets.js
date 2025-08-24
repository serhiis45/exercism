const brackets = /[{}()[\]]/;
const pairedBrackets = /\{}|\[]|\(\)/g;

const MATCHER = {
  '{': '}',
  '[': ']',
  '(': ')'
};

export const isPaired = (string) => {
  const arrWithoutPairs = [...string]
    .filter(item => item.match(brackets))
    .join('')
    .replace(pairedBrackets, '')
    .split('');

  const { length } = arrWithoutPairs;
  if ( length === 0 ) return true;
  if ( length % 2 !== 0 ) return false;

  const leftHalf = arrWithoutPairs.slice(0, length / 2);
  const rightHalf = arrWithoutPairs.slice(length / 2).reverse();
  return leftHalf.every((item, index) => MATCHER[item] === rightHalf[index]);
};


