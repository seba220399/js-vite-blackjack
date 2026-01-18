
/**
 *
 * @param {Array<String>} deck deck de funcion crearDeck()
 * @returns {String}retorna la carta del deck
 */

export const pedirCarta = (deck) => {


  if (!deck || deck.length === 0) {
    throw 'No hay cartas en el deck';
  }
  return deck.pop();
}

export default pedirCarta
