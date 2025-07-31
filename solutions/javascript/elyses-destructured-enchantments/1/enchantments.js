/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
export const getFirstCard = deck => {
const [FIRST_CARD, ...REST_OF_DECK] = deck;
    return FIRST_CARD;
}

/**
 * Get the second card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the second card in the deck
 */
export const getSecondCard = deck => {
  const [FIRST_CARD, SECOND_CARD, ...REST_OF_DECK] = deck;
    return SECOND_CARD;
}

/**
 * Switch the position of the first two cards in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck with reordered cards
 */
export const swapTopTwoCards = deck => {
  const [FIRST_CARD, SECOND_CARD, ...REST_OF_DECK] = deck;
    return [SECOND_CARD, FIRST_CARD, ...REST_OF_DECK];
}

/**
 * Put the top card of the given deck into a separate discard pile
 *
 * @param {Card[]} deck
 *
 * @returns {[Card, Card[]]} the top card of the given
 * deck and a new deck containing all the other cards
 */
export const discardTopCard = deck => {
  const [FIRST_CARD, ...REST_OF_DECK] = deck;
  return [FIRST_CARD, REST_OF_DECK];
}

/** @type {Card[]} **/
const FACE_CARDS = ['jack', 'queen', 'king'];

/**
 * Insert face cards into the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck where the second,
 * third, and fourth cards are the face cards
 */
export const insertFaceCards = deck => {
  const [FIRST_CARD, ...REST_OF_DECK] = deck;
  return [FIRST_CARD, ...FACE_CARDS, ...REST_OF_DECK]
}
