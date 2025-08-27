const brackets = /[{}()[\]]/;
const pairedBrackets = /\{}|\[]|\(\)/g;

const MATCHER = {
  '{': '}',
  '[': ']',
  '(': ')'
};

export const isPaired = (string) => {
  const bracketsWithoutPairs = [...string]
    .filter(item => item.match(brackets))
    .join('')
    .replace(pairedBrackets, '')
    .split('');

  const { length } = bracketsWithoutPairs;
  if ( length === 0 ) return true;
  if ( length % 2 !== 0 ) return false;

  const leftHalf = bracketsWithoutPairs.slice(0, length / 2);
  const rightHalf = bracketsWithoutPairs.slice(length / 2).reverse();
  return leftHalf.every((item, index) => MATCHER[item] === rightHalf[index]);
};


