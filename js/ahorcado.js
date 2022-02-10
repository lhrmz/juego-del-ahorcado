var mensajeError = document.querySelector("#mensaje-error");


window.addEventListener("keypress", function(event){
    //event.preventDefault();

    //gatillo para iniciar con la captura del teclado
    if (inicioJuego == true){   
        
        capturarLetraDelJuego(event);
        if (letraIngresada==0){
            return
        }
        var validarLetra = validarIngresoDeLetra(letraIngresada);
        if (validarLetra == true){
            exhibirMensajeError();
            return;
        }
        buscarLetraIngresada(letraIngresada,palabraSecreta);

        //busca cuantas veces aparece la letra para imprimirla en el lugar correcto
        if (coincidencia == true){
            letraCorrecta();
        } else {
            letraIncorrecta();
        } 
    }
});

function capturarLetraDelJuego(evento) {     
    letraIngresada = String.fromCharCode(evento.which);
    letraIngresada=letraIngresada.toUpperCase();
}

//Valida si la tecla es una letra o un numero
function validarIngresoDeLetra(tecla){
    var numero = tecla.search(/^[0-9]+$/);
    if(numero >=0) {
        return true;
    }else {
        return false;
    }
}

function letraCorrecta(){
    var coincidenciaLetra = cuantasVecesAparece(letraIngresada,palabraSecreta);
    var posicion=0;
    for(i=0; i<coincidenciaLetra; i++){
        var lugar=palabraSecreta.indexOf(letraIngresada,posicion)
        imprimirLetraCorrecta(letraIngresada, lugar);
        //descuenta las letras que coinciden 
        removerItemPalabra(letraIngresada,separarPalabraSecreta);    
        if(separarPalabraSecreta.length == 0){
            mensajePantalla("Felicidades Ganaste!!");
            inicioJuego = false;
        }
        posicion = lugar+1;
        mensajeError.innerHTML = "";
    }
}

function letraIncorrecta(){
    //verifica que no se repita las letras incorrectas
    //imprime en pantalla la letra y segmento del ahorcado
    repeticionLetrasIncorrectas = cuantasVecesAparece(letraIngresada,letrasIncorrectas);
    if (repeticionLetrasIncorrectas > 0){
        return;
    }
    letrasIncorrectas.push(letraIngresada);
    imprimirLetraIncorrecta(letraIngresada,letrasIncorrectas.length);    
    dibujarAhorcado();
    mensajeError.innerHTML = "";
    if(intentos == letrasIncorrectas.length){
        mensajePantalla("GAME OVER");
        inicioJuego=false;
    }
}

//busca la letra ingresada dentro de la palabra escondida
function buscarLetraIngresada(letra,palabra){
    var expresion = new RegExp(letra, "i");
    if (expresion.test(palabra)){
        coincidencia = true;
        return coincidencia;
    } else{
        coincidencia=false;
        return coincidencia;
    }
}

//verifica si existe letras repetidas
function cuantasVecesAparece(letra,palabra){
    var indices = [];
    for(var i = 0; i < palabra.length; i++) {
        if (palabra[i] === letra) indices.push(i);
    }
    return indices.length;
}

//descuenta las letras correctas de la palabra secreta
function removerItemPalabra(letra,array){
    var i = array.indexOf( letra );
    if(i !== -1){
        array.splice( i, 1 );
    }
}

function exhibirMensajeError(){
    mensajeError.textContent = "Ingrese solo letras";
}

//dibuja los segmentos del ahorcado
function dibujarAhorcado(){
    if (letrasIncorrectas.length == 1){
        posteHorca();
    } 
    if(letrasIncorrectas.length == 2){
        horizontalHorca();
    }
    if(letrasIncorrectas.length == 3){
        sogaHorca();
    } 
    if(letrasIncorrectas.length == 4){
        cabeza();
    } 
    if(letrasIncorrectas.length == 5){
        tronco();
    } 
    if(letrasIncorrectas.length == 6){
        piernaIzquierda();
    } 
    if(letrasIncorrectas.length == 7){
        piernaDerecha();
    } 
    if(letrasIncorrectas.length == 8){
        brazoIzquierdo();
    }
    if(letrasIncorrectas.length == 9){
        brazoDerecho();
    }
}
