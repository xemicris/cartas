    /**
   * Función que devuelve el valor de cada carta
   * @param {String} carta 
   * @returns {Number} devuelve el valor de la carta
   */
  export const valorCarta = (carta) => {
    let puntos;
    //extraer el número -> desde la posición 0 a la última -1 
    const valor = carta.substring(0, carta.length-1);
    return puntos = (isNaN(valor)) ? (valor === 'A') ? 11 : 10 : parseInt(valor);
}