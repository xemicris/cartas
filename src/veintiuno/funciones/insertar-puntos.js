  //Función que inserta los puntos del jugador en el HTML de forma dinámica

 export function insertarPuntos(quienJuega, puntos, puntajeJugador, puntajeMaquina){
    (quienJuega === 'jugador') ? puntajeJugador.innerText = puntos : puntajeMaquina.innerHTML = puntos;
}