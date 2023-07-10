//

/**
 * Función que pide el nombre del jugador y lo muestra por pantalla
 * @param {HTMLElement} elementoHTML
 * @returns {String} nombre del jugador
 */
export function insertarNombre(elementoHTML){

    let nombreJugador = '';

    do{

        nombreJugador = prompt("¿Introduce tu nombre por favor?")

    }while(nombreJugador === null || nombreJugador === '')
    

    elementoHTML.innerText = nombreJugador + ' -';

    return nombreJugador;
}