import _ from "underscore";

/**
 * Función que crea una nueva baraja
 * @param {array<String>} tiposDeCarta Ejemplo: ['C', 'D', 'P', 'T']
 * @param {array<String>} tiposEspeciales Ejemplo: ['A', 'J', 'D', 'R']
 * @returns {array<String>} retorna una nueva baraja de cartas
 */
export const crearBaraja = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta || tiposDeCarta.length === 0) 
    throw new Error('TiposDeCarta es obligatorio como un array de String');

    if(!tiposEspeciales || tiposEspeciales.length === 0) 
    throw new Error('TiposEspeciales es obligatorio como un array de String');


    let baraja = [];

    for(let i = 2; i <= 10; i++){
        for(let tipoDeCarta of tiposDeCarta){
            baraja.push(i + tipoDeCarta);
        }
    }

    for (let i in tiposDeCarta){
        for (let especial of tiposEspeciales){
            baraja.push(especial + tiposDeCarta[i]);
        }
    }
    
    /*Se utiliza Underscore.js*/
    baraja = _.shuffle(baraja);
    //baraja = barajar(baraja);
    return baraja;
}
//export default crearBaraja;
