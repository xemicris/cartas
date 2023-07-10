import toastr from 'toastr';


toastr.options = {
    "closeButton": true,
    "positionClass": "toast-top-right",
    "showDuration": "250",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut",
  }
  

  /**
   * Función que indica si el jugador ha ganado o perdido
   * @param {Number} puntosJugador 
   * @param {Number} puntosMaquina 
   * @param {String} nombreJugador 
   */
  export function ganaPierde(puntosJugador, puntosMaquina, nombreJugador){

    if(puntosJugador > 21){

        toastr.error("Gana la banca");

        //ganador.innerHTML = "La máquina gana";

    } else if(puntosJugador > puntosMaquina){

        toastr.success(`Gana ${nombreJugador}`);

        //ganador.innerHTML = "Gana el jugador";

    }else if(puntosJugador < puntosMaquina && puntosMaquina <= 21){

        toastr.error("Gana la banca");

        //ganador.innerHTML = "La máquina gana";

    }else if(puntosJugador < puntosMaquina && puntosMaquina > 21){
        toastr.success(`Gana ${nombreJugador}`);
        
    }else{

        toastr.warning("Empate");
        //ganador.innerHTML = "empate";
    }
}