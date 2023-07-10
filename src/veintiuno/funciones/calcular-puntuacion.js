import { valorCarta } from "./valor-carta";

/**
 * Función que calcula los puntos
 * @param {String} quienJuega a quién le toca jugar
 * @param {String} carta de la baraja
 * @returns {Number} puntos obtenidos
 */
  export function puntuacion(quienJuega, carta, puntosJugador, puntosMaquina){
    return (quienJuega === 'jugador') ? puntosJugador = puntosJugador + valorCarta(carta) : 
                                        puntosMaquina = puntosMaquina + valorCarta(carta);
}