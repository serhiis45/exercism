// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let count = 0;
  
  stack.forEach((item) => {
    count += (item === card) ? 1 : 0;
  });
  
  return count;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let countEven = 0;
  let countOdd = 0;

  for (let card of stack) {
    isOddNumber(card) ? countOdd += 1 : countEven += 1;
  }

  return type ? countOdd : countEven;
}

// helper function
const isOddNumber = (/** @type {number} */ num) => num % 2 === 0;