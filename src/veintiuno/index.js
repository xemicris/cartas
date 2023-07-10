import _ from 'underscore';
import { insertarNombre, crearBaraja, generarCarta, anadirCartas, insertarPuntos, puntuacion, turnoBanca, ganaPierde} from './funciones';

(() =>{
  'use strict'

  //Datos
  let baraja = [];
  const tipos = ['C', 'D', 'P', 'T'];
  const especiales = ['A', 'J', 'D', 'R'];
  let puntosJugador = 0, 
  puntosMaquina = 0,
  quienJuega = '',
  nombreJugador,
  puntos;

  //Referencias del HTML
  let nombreJ = document.querySelector('#nombreJugador');
  const btnNuevo = document.querySelector('#btnNuevo');
  const btnPedir = document.querySelector('#btnPedir');
  const btnParar = document.querySelector('#btnParar');
  let puntajeJugador = document.querySelectorAll('small')[0];
  let puntajeMaquina = document.querySelectorAll('small')[1];
  const contenedorCartasJugador = document.querySelector('#jugador-cartas');
  const contenedorCartasMaquina = document.querySelector('#maquina-cartas');

  
  baraja = crearBaraja(tipos, especiales);

  //Eventos

  btnNuevo.addEventListener('click', ()=>{
      baraja = crearBaraja(tipos, especiales);
      puntosJugador = 0;
      puntosMaquina = 0;
      puntajeJugador.innerText = 0;
      puntajeMaquina.innerText = 0;
      contenedorCartasJugador.innerHTML = '';
      contenedorCartasMaquina.innerHTML = '';
      btnPedir.disabled = false;
      btnParar.disabled = false;
      
  })
  
  btnPedir.addEventListener('click', ()=>{
      quienJuega = 'jugador';
      const carta = generarCarta(baraja);
      puntosJugador = puntuacion(quienJuega, carta, puntosJugador, puntosMaquina);
      insertarPuntos(quienJuega, puntosJugador, puntajeJugador, puntajeMaquina);
      anadirCartas(quienJuega, carta, contenedorCartasJugador, contenedorCartasMaquina);
      if(puntosJugador >= 21){
          btnPedir.disabled = true;
          btnParar.disabled = true;
          turnoBanca(quienJuega, baraja, puntosMaquina, puntosJugador, puntajeJugador, puntajeMaquina, contenedorCartasJugador, contenedorCartasMaquina, nombreJugador);
      }
  })

  btnParar.addEventListener('click', ()=>{
      turnoBanca(quienJuega, baraja, puntosMaquina, puntosJugador, puntajeJugador, puntajeMaquina, contenedorCartasJugador, contenedorCartasMaquina, nombreJugador);
      btnPedir.disabled = true;
      btnParar.disabled = true;
  
  })

  setTimeout(() => {
    nombreJugador = insertarNombre(nombreJ);
  }, 800);

})();



