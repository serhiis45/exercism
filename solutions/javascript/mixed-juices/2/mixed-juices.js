// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

const JUICES_PREPARATION_TIME = {
  'Pure Strawberry Joy': 0.5,
  'Energizer': 1.5,
  'Green Garden': 1.5,
  'Tropical Island': 3,
  'All or Nothing': 5
}

const DEFAULT_PREPARATION_TIME = 2.5

const WEDGES_BY_SIZE = {
  'small': 6,
  'medium': 8,
  'large': 10
}

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export const timeToMixJuice = name => JUICES_PREPARATION_TIME[name] ?? DEFAULT_PREPARATION_TIME;

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export const limesToCut = (wedgesNeeded, limes) => {
  let sum = 0, i = 0;
  while (sum < wedgesNeeded && i < limes.length){
    sum += WEDGES_BY_SIZE[limes[i]];
    i++;
  }
  return i;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let sum = 0, i = 0;
  while (sum < timeLeft && i < orders.length){
    sum += timeToMixJuice(orders[i]);
    i++;
  }
  return orders.slice(i);
}