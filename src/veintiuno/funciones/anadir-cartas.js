  //Función que añade las cartas del jugador

  
  export function anadirCartas(quienJuega, carta, contenedorCartasJugador, contenedorCartasMaquina){

    const imagenCarta = document.createElement('img');
    imagenCarta.setAttribute("class", "carta");
    imagenCarta.setAttribute("src", `img/${carta}.png`);

    if (quienJuega === 'jugador'){
        imagenCarta.setAttribute("alt", `imagen de una carta del jugador`);
        contenedorCartasJugador.append(imagenCarta);
    }else if(quienJuega == 'maquina'){
        imagenCarta.setAttribute("alt", `imagen de una carta de la máquina`);
        contenedorCartasMaquina.append(imagenCarta);
    }
      
  }