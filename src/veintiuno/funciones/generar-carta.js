 /**
  * Función que obtiene una carta de la baraja
  * @param {Array<String>} baraja es un array de String
  * @returns {String} retorna una carta de la baraja
  */
  export const generarCarta = (baraja) => {
    if(!baraja || baraja.length === 0){
        throw 'No hay cartas en la baraja';
    }
    const carta = baraja.splice(0, 1);
    return carta[0];
}