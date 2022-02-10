var jugar = document.querySelector("#iniciar-juego");
var jugarDeNuevo = document.querySelector("#nuevo-juego");

var palabras = ["ALURA", "ORACLE", "LATAM", "ONE", "SCRIPT", "JAVA"];

var inicioJuego = false;
var palabraSecreta="";
var letraIngresada = "";
var separarPalabraSecreta = [];
var repeticionLetrasIncorrectas="";
var letrasIncorrectas = [];
var coincidencia = false;
var intentos = 9;
var botonInvisible = true;

jugar.addEventListener("click", iniciarJuego);
jugarDeNuevo.addEventListener("click", iniciarJuego);

function iniciarJuego(event){
    event.preventDefault();

    //mostrar el boton nuevo juego
    if(botonInvisible==true){
        jugarDeNuevo.classList.remove("invisible");
        botonInvisible==false;
    }
    ubicarPantalla();
    var indicePalabraAleatoria="";
    
    exhibirMensaje("");

    //inicializando valores
    letraIngresada = "";
    repeticionLetrasIncorrectas="";
    palabraSecreta="";
    letrasIncorrectas=[];

    //preparando la pantalla del juego
    limpiarPantalla();
    fondoCanvas();
    ahorcadoPantallaInicial();

    //sortear palabra con la que se jugara
    indicePalabraAleatoria = sortearPalabra(palabras.length);
    palabraSecreta = palabras[indicePalabraAleatoria];
    
    //creando los guiones en la pantalla para la palabra secreta
    crearGuiones(palabraSecreta);
    separarPalabraSecreta = separarPalabra(palabraSecreta);

    //comienza la captura del teclado
    inicioJuego = true;
}

//escoje la palabra secreta aleatoriamente
function ubicarPantalla(){
    window.scroll({
        top: 700,
        left: 0,
        behavior: 'smooth',
    });
}

function sortearPalabra(max) {
    return Math.floor((Math.random()*(max-0)));
}

function separarPalabra(palabra){
    return palabra.split("");
}