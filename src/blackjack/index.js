import { crearDeck,pedirCarta,valorCarta , determinarGanador, crearCarta} from "./usecases";

const miModulo = (() => {
  'use strict'



let deck = [];

let puntosJugadores = [];



const tipos = ['C','D','H','S'],
      especiales = ['A','J','Q','K']




// Esta funcion INICIA el juego
const inicializarjuego = ( numJugadores=2 ) => {
  deck = crearDeck(tipos,especiales);
  puntosJugadores = [];
  for(let i=0; i<numJugadores ; i++){
    puntosJugadores.push(0);
  }
  puntosHTML.forEach( elem => elem.innerHTML = 0);

  divCartasJugadores.forEach(elem => elem.innerHTML = '');

  btnPedirCarta.disabled = false;
  btnDetener.disabled = false;
}





// ------------------------------------- //
              // QUERIES
// ------------------------------------- //


const divCartasJugadores = document.querySelectorAll('.divCartas'),
      puntosHTML = document.querySelectorAll('small');

const btnPedirCarta = document.getElementById('pedirCarta'),
      btnNuevoJuego = document.getElementById('reset'),
      btnDetener    = document.getElementById('detener');
// ------------------------------------- //

// ------------------------------------- //






const acumularPuntos = (carta, turno) => {
  puntosJugadores[turno] += valorCarta(carta);
  puntosHTML[turno].innerHTML = `<small>${puntosJugadores[turno]}</small>`;
  return puntosJugadores[turno];
}







const turnoComputadora = (puntosMinimos) => {

  let puntosComputadora = 0;
  do {
    const carta = pedirCarta(deck);
    puntosComputadora = acumularPuntos(carta, puntosJugadores.length-1);
    crearCarta(carta, puntosJugadores.length-1, divCartasJugadores);

  }while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
    determinarGanador(puntosJugadores);


};









btnPedirCarta.addEventListener("click", function () {

  const carta = pedirCarta(deck);
  const puntosJugador = acumularPuntos(carta,0);

  crearCarta(carta, 0 , divCartasJugadores);



  if (puntosJugador > 21) {
    console.warn('Perdiste, intentalo nuevamente.');
    btnPedirCarta.disabled  = true;
    btnDetener.disabled     = true;
    turnoComputadora(puntosJugador);
}
  else if (puntosJugador === 21){
    console.warn('¡¡ Que suerte que tienes !!');
    btnPedirCarta.disabled  = true;
    btnDetener.disabled     = true;
    turnoComputadora(puntosJugador);
  }

});


btnNuevoJuego.addEventListener("click", function () {
  inicializarjuego();
});


btnDetener.addEventListener("click", function () {
  btnPedirCarta.disabled = true;
  btnDetener.disabled    = true;
  turnoComputadora(puntosJugadores[0]);
})

return {
  nuevoJuego: inicializarjuego
}
})();



