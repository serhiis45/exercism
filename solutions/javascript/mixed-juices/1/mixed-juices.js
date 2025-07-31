// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export const timeToMixJuice = name => {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
      return 1.5;
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  }

}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export const limesToCut = (wedgesNeeded, limes) => {
  if (wedgesNeeded === 0) {
    return 0;
  }
  let i = 0;
  while (true) {
    let j = 0;
    for (j; j < limes.length; j++) {
      if (i >= wedgesNeeded) {
        break;
      }
      switch (limes[j]) {
        case 'small':
          i += 6;
          break;
        case 'medium':
          i += 8;
          break;
        case 'large':
          i += 10;
          break;
      }
    }
    return j;
  }
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let time = 0;
  while (time < timeLeft) {
    for (let i = 0; i <= orders.length; i++) {
      time += timeToMixJuice(orders[i]);
      
      if (orders.length == i){
        return []
      }
      else if(time >= timeLeft) {
        return orders.slice(i+1);
      }
    }
  }
}