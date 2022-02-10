var agregarPalabra = document.querySelector("#nueva-palabra");
var ingresoDePalabra = document.querySelector("#input-nueva-palabra");
var mensaje = document.querySelector("#mensaje");

agregarPalabra.addEventListener("click",function(event){
    event.preventDefault();

    var palabraNueva = capturarPalabra();
    if(palabraNueva == ""){
        exhibirMensaje("Escriba una nueva palabra");
        return;
    }
    var validarPalabra = validarMinuscula(palabraNueva);
    if(validarPalabra == true){
        exhibirMensaje("Ingrese palabras en mayúscula")
        return;
    }
    validarPalabra = validarAcento(palabraNueva);
    if(validarPalabra == true){
        exhibirMensaje("Ingrese palabras sin acento")
        return;
    }
    var palabraSeparada=separarPalabra(palabraNueva);
    if(palabraSeparada.length > 8){
        exhibirMensaje("La palabra no puede tener mas de 8 letras");
        return;
    }
    palabras.push(palabraNueva);
    exhibirMensaje("Palabra agregada");
    ingresoDePalabra.value = "";
});

function capturarPalabra(){
    var palabra=ingresoDePalabra.value;
    return palabra;
}

function validarMinuscula(texto){
    var minuscula = texto.search(/[a-z]/);
    if(minuscula >=0) {
        return true;
    }else {
        return false;
    }
}

function validarAcento(texto){
    var acento = texto.search(/[Á-Ú]/);
    if(acento >=0) {
        return true;
    }else {
        return false;
    }
}

function exhibirMensaje(mensajeMostrar){
    mensaje.textContent = mensajeMostrar;
}