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
  let sum = 0;
  
  stack.forEach((item) => {
    if(item === card) sum += 1;
  });
  
  return sum;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let sumEven = 0;
  let sumOdd = 0;

  for (let card of stack) {
    if ( isOddNumber(card) ) {
      sumOdd +=1;
    } else {
      sumEven +=1;
    }
  }

  if(type) {
    return sumOdd;
  };
  return sumEven;
}

// helper function
const isOddNumber = (/** @type {number} */ num) => num % 2 === 0;