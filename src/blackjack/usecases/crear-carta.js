

/**
 *
 * @param {String} carta carta de pedirCarta()
 * @param {*} turno pos. del jugador dentro de lista puntaje
 * @param {*} div Querie de div img de cartas
 */

export const crearCarta = (carta, turno, div) => {
  const imgCarta = document.createElement('img');
  imgCarta.src = `./assets/cartas/${ carta }.png`;
  imgCarta.classList.add('carta');
  div[turno].append(imgCarta);
}
