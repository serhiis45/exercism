// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export const twoSum = (array1, array2) => +array1.join('') + +array2.join('');

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export const luckyNumber = value => {
  const NUMBER_AS_STRING = value.toString();
  const REVERSED_STRING = NUMBER_AS_STRING.split('').reverse().join('');

  if (NUMBER_AS_STRING == REVERSED_STRING) {
    return true;
  }
  else return false;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) {
    return ('Required field')
  }
  if (isNaN(Number(input)) || Number(input) == 0) {
    return ('Must be a number besides 0')
  }
  else return ''
}
