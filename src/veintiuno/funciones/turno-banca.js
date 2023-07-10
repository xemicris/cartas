import { generarCarta } from "./generar-carta";
import { puntuacion } from "./calcular-puntuacion";
import { insertarPuntos } from "./insertar-puntos";
import { anadirCartas } from "./anadir-cartas";
import { ganaPierde } from "./gana-pierde";

  export const turnoBanca = (quienJuega, baraja, puntosMaquina, puntosMinimosASuperar, puntajeJugador, puntajeMaquina, contenedorCartasJugador, contenedorCartasMaquina, nombreJugador)=>{
    quienJuega = 'maquina';
    do{
        const carta = generarCarta(baraja);
        puntosMaquina = puntuacion(quienJuega, carta, puntosMinimosASuperar, puntosMaquina);
        insertarPuntos(quienJuega, puntosMaquina, puntajeJugador, puntajeMaquina);
        anadirCartas(quienJuega, carta, contenedorCartasJugador, contenedorCartasMaquina);

        if(puntosMinimosASuperar > 21){
            break;
        }
    }while((puntosMaquina < puntosMinimosASuperar) && (puntosMinimosASuperar <= 21));

    ganaPierde(puntosMinimosASuperar, puntosMaquina, nombreJugador);
}