/// <reference path="./global.d.ts" />
// @ts-check

const DEFAULT_AVERAGE_PREPATION_TIME = 2;

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * 
 * @param {*} remainignTime remaining time in a minuts
 * @returns {string} result
 */
export const cookingStatus = remainignTime =>
    remainignTime == 0
        ? 'Lasagna is done.'
        : remainignTime == null
            ? 'You forgot to set the timer.'
            : 'Not done, please wait.'

/**
 * 
 * @param {Array} layers array of layers
 * @param {Number} averagePreparaionTime average preparation time per layers
 * @returns total preparation time
 */
export const preparationTime = (layers, averagePreparaionTime) =>
    layers.length * (averagePreparaionTime ?? DEFAULT_AVERAGE_PREPATION_TIME);


/**
 * 
 * @param {Array} layers number of layers
 * @returns {Object} amount of nuddles and sauce
 */

export const quantities = layers => ({
    noodles: number(layers, 'noodles') * 50,
    sauce: number(layers, 'sauce') * 0.2
})

const number = (layers, layer) => layers.filter(currentIngredient => currentIngredient === layer).length;

/**
 * 
 * @param {Array} friendList friend's list of ingredients
 * @param {Array} myList your list of ingredients
 * @returns undefined
 */
export const addSecretIngredient = (friendList, myList) => {
    const FRIENDS_LIST_LENGTH = friendList.length
    myList.push(friendList[FRIENDS_LIST_LENGTH - 1])
}

/**
 * 
 * @param {Object} recipe 
 * @param {Number} portions 
 * @returns {Object} recipe object
 */
export const scaleRecipe = (recipe, portions) => {
    let scaleRecipe = { ...recipe };
    for (const INGREDIENT in scaleRecipe) {
        scaleRecipe[INGREDIENT] *= (portions / 2);
    }
    return scaleRecipe;
}