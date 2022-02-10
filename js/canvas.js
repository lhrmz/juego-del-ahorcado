var pantalla = document.querySelector("#ahorcado");
var pincel = pantalla.getContext("2d");

function limpiarPantalla(){
    pincel.clearRect(0,0,1200,800);
}

function fondoCanvas(){
    pincel.fillStyle = "#F3F5FC";
    pincel.fillRect(0,0,1200,800);
}

//Crea pantalla inicial del juego-base del ahorcado//
function ahorcadoPantallaInicial(){
    pincel.fillStyle = "#0A3871";
    pincel.beginPath();
    pincel.fillRect(50,750,350,10);
    pincel.fillRect(195,720,60,40);
    pincel.fill();
}

//Crea guiones para la palabra secreta
function crearGuiones(palabraJuego){
    var espaciado = 0;
    for (var i = 0; i < palabraJuego.length; i++){
        pincel.fillStyle = "#0A3871"; 
        pincel.beginPath();
        pincel.fillRect(450+espaciado, 750, 50, 10);
        espaciado = espaciado + 100
    }
}

function imprimirLetraCorrecta(letra,posicion){
    var espaciadoLetra = 0;
    var lugarLetra = espaciadoLetra + (posicion*100)
    pincel.font="60px arial";
    pincel.fillStyle="#0A3871";
    pincel.fillText(letra, 450 + lugarLetra, 730);
}

function imprimirLetraIncorrecta(letra,espaciado) {
    var espaciadoLetra = 0;
    var lugarLetra = espaciadoLetra + (espaciado*40);
    pincel.font="40px Georgia";
    pincel.fillStyle="#495057";
    pincel.fillText(letra, 750 + lugarLetra, 400); 
}

function mensajePantalla(mensaje){
    pincel.font="30px arial";
    pincel.fillStyle="red";
    pincel.fillText(mensaje, 900, 500);
}

//dibujando ahorcado

function posteHorca(){
    pincel.fillStyle = "#0A3871";
    pincel.beginPath();
	pincel.fillRect(221, 300, 8, 450);
}

function horizontalHorca(){
    pincel.fillStyle = "#0A3871";
    pincel.beginPath();
	pincel.fillRect(221, 300, 170, 8);
}

function sogaHorca(){
    pincel.fillStyle = "#0A3871";
    pincel.beginPath();
	pincel.fillRect(391, 300, 8, 80);
}

function cabeza(){
    pincel.fillStyle = "#0A3871";
    pincel.beginPath();
	pincel.arc(395, 395, 30, 0, 2*Math.PI);
    pincel.fill();

    pincel.fillStyle = "#F3F5FC";
    pincel.beginPath();
	pincel.arc(395, 395, 23, 0, 2*Math.PI);
    pincel.fill();
}

function tronco(){
    pincel.fillStyle = "#0A3871";
	pincel.beginPath();
    pincel.fillRect(391, 425, 8, 160);
}

function piernaIzquierda(){
    pincel.strokeStyle = "#0A3871";
    pincel.lineWidth = 8; 
    pincel.beginPath();
    pincel.moveTo(395,582);
	pincel.lineTo(327, 680);
    pincel.stroke();
}

function piernaDerecha(){
    pincel.strokeStyle = "#0A3871";
    pincel.lineWidth = 8; 
    pincel.beginPath();
    pincel.moveTo(395,582);
	pincel.lineTo(463, 680);
    pincel.stroke();
}

function brazoIzquierdo(){
    pincel.strokeStyle = "#0A3871";
    pincel.lineWidth = 8; 
    pincel.beginPath();
    pincel.moveTo(395,425);
	pincel.lineTo(327, 523);
    pincel.stroke();
}

function brazoDerecho(){
    pincel.strokeStyle = "#0A3871";
    pincel.lineWidth = 8; 
    pincel.beginPath();
    pincel.moveTo(395,425);
	pincel.lineTo(463, 523);
    pincel.stroke();
}