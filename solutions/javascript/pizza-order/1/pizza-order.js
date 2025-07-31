/// <reference path="./global.d.ts" />
//
// @ts-check

const MARGHERITA = 7;
const CAPRESE = 9;
const FORMAGGIO = 10;

const EXTRA_SOUSE = 1;
const EXTRA_TOPPINGS = 2;

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let price = 0;
  // @ts-ignore
  price += getPriceOf(pizza);

  if (extras) {
    for (let item of extras) {
      // @ts-ignore
      price += getPriceOf(item);
    }
  }

  return price;

  /** helper function
   * @param {string} item
   */
  function getPriceOf(item) {
    let price = 0;
    switch(item) {
      case 'Margherita':
        return price = MARGHERITA;
      case 'Caprese':
        return price = CAPRESE;
      case 'Formaggio':
        return price = FORMAGGIO;
      case 'ExtraSauce':
        return price = EXTRA_SOUSE;
      case 'ExtraToppings':
        return price = EXTRA_TOPPINGS; 
    }
  }
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let total = 0;
  for (let i = 0; i < pizzaOrders.length; i++) {
     total += pizzaPrice(pizzaOrders[i].pizza, ...pizzaOrders[i].extras);
  }
  return total;
}


