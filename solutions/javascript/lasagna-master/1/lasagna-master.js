/// <reference path="./global.d.ts" />
// @ts-check

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
 * @param {Number} time average preparation time per layers
 * @returns total preparation time
 */
export const preparationTime = (layers, time = 2) => layers.length * time;

/**
 * 
 * @param {Array} layers number of layers
 * @returns {Object} amount of nuddles and sauce
 */
export const quantities = layers => {
    let noodles = 0, sauce = 0;
    for (let i = 0; i < layers.length; i++) {
        if (layers[i] == 'noodles') {
            noodles += 50;
        }
        else if (layers[i] == 'sauce') {
            sauce += 0.2;
        }
    }
    return {noodles, sauce}
}

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
    let scaleRecipe = {...recipe};
    for (let ingredient in scaleRecipe){
        scaleRecipe[ingredient] *= (portions / 2);
    }
    return scaleRecipe;
}