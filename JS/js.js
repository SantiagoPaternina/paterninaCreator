//variables globales
const d = document;
//imagenes del juego
let imgN1 = [
    {NOMBRE:"SIU", url:"IMG/Siu.jpg"},//../IMG/siu.jpg
    {NOMBRE:"GOL", url:"IMG/gollll.jpg"},
    {NOMBRE:"GOLES", url:"IMG/Goles.jpg"},
    {NOMBRE:"FELIZ", url:"IMG/feliz.jpg"},
    {NOMBRE:"CHILENA", url:"IMG/chilena.jpg"},
    {NOMBRE:"CAPITAN", url:"IMG/capitan.jpg"},
    {NOMBRE:"SIU", url:"IMG/Siu.jpg"},
    {NOMBRE:"GOL", url:"IMG/gollll.jpg"},
    {NOMBRE:"GOLES", url:"IMG/Goles.jpg"},
    {NOMBRE:"FELIZ", url:"IMG/feliz.jpg"},
    {NOMBRE:"CHILENA", url:"IMG/chilena.jpg"},
    {NOMBRE:"CAPITAN", url:"IMG/capitan.jpg"}
];
let imgN2 = [
    {NOMBRE:"SIU", url:"IMG/Siu.jpg"},
    {NOMBRE:"GOL", url:"IMG/gollll.jpg"},
    {NOMBRE:"GOLES", url:"IMG/Goles.jpg"},
    {NOMBRE:"FELIZ", url:"IMG/feliz.jpg"},
    {NOMBRE:"CHILENA", url:"IMG/chilena.jpg"},
    {NOMBRE:"CAPITAN", url:"IMG/capitan.jpg"},
    {NOMBRE:"SIU", url:"IMG/Siu.jpg"},
    {NOMBRE:"GOL", url:"IMG/gollll.jpg"},
    {NOMBRE:"GOLES", url:"IMG/Goles.jpg"},
    {NOMBRE:"FELIZ", url:"IMG/feliz.jpg"},
    {NOMBRE:"CHILENA", url:"IMG/chilena.jpg"},
    {NOMBRE:"CAPITAN", url:"IMG/capitan.jpg"},
    {NOMBRE:"AQUIESTOY", url:"IMG/estoyAqui.jpg"},
    {NOMBRE:"AQUIESTOY", url:"IMG/estoyAqui.jpg"},
    {NOMBRE:"LINDO", url:"IMG/lindo.jpg"},
    {NOMBRE:"LINDO", url:"IMG/lindo.jpg"}
];
let imgN3 = [
    {NOMBRE:"SIU", url:"IMG/Siu.jpg"},
    {NOMBRE:"GOL", url:"IMG/gollll.jpg"},
    {NOMBRE:"GOLES", url:"IMG/Goles.jpg"},
    {NOMBRE:"FELIZ", url:"IMG/feliz.jpg"},
    {NOMBRE:"CHILENA", url:"IMG/chilena.jpg"},
    {NOMBRE:"CAPITAN", url:"IMG/capitan.jpg"},
    {NOMBRE:"SIU", url:"IMG/Siu.jpg"},
    {NOMBRE:"GOL", url:"IMG/gollll.jpg"},
    {NOMBRE:"GOLES", url:"IMG/Goles.jpg"},
    {NOMBRE:"FELIZ", url:"IMG/feliz.jpg"},
    {NOMBRE:"CHILENA", url:"IMG/chilena.jpg"},
    {NOMBRE:"CAPITAN", url:"IMG/capitan.jpg"},
    {NOMBRE:"AQUIESTOY", url:"IMG/estoyAqui.jpg"},
    {NOMBRE:"AQUIESTOY", url:"IMG/estoyAqui.jpg"},
    {NOMBRE:"LINDO", url:"IMG/lindo.jpg"},
    {NOMBRE:"LINDO", url:"IMG/lindo.jpg"},
    {NOMBRE:"OFENDIDO", url:"IMG/ofendido.jpg"},
    {NOMBRE:"OFENDIDO", url:"IMG/ofendido.jpg"},
    {NOMBRE:"THEBEST", url:"IMG/THEBEST.jpg"},
    {NOMBRE:"THEBEST", url:"IMG/THEBEST.jpg"}
];
//seleccionar al tablero del html 
let tablero = d.querySelector(".tablero");
let nombreImg = []; //GUARDAR LOS NOMBRES DE IMAGENES
let idImg = []; //GUARDAR LOS ID DE IMAGENES
let aciertos = 0;
let totalIntentos = 0;
let totalTiempo = 0;
let tiempoSobrante = 0;
let intentos = 0;
let tiempo = 60;
let nivel = 1;
let mostrarNivel = d.querySelector(".nivel");
let mostrarIntentos = d.querySelector(".intentos");
let mostrarAciertos = d.querySelector(".aciertos");
let mostrarTiempo = d.querySelector(".tiempo");
let tiempoTrascurrido;
let btn_iniciar = d.querySelector(".btn-iniciar")
let imagenNivel;
let estoyJugando = false;
let sonidoSeleccionar = new Audio("./SOUNDS/seleccionar.mp3.mp3");
let sonidoAdivinar = new Audio("./SOUNDS/correcto.mp3");
let sonidoFallar = new Audio("./SOUNDS/incorrecto.mp3");
let sonidoPerdiste = new Audio("./SOUNDS/perdedor.mp3");
let sonidoGanar = new Audio("./SOUNDS/SIUUUUUUU.mp3");
let sonidoRegresivo = new Audio("./SOUNDS/cuentaRegresiva.mp3");
let sonidoTerminaste = new Audio("./SOUNDS/GraciasAficion.mp3");
let sonidoFondo = new Audio("./SOUNDS/sonidofondo.mp3");
let mostrarJugador = d.querySelector(".jugador");
let tabla = d.querySelector(".records tbody");
let fondoBody = d.querySelector("body");

//setTimeout()//Ejecuta una vez cuando pasa determinado tiempo
//setInterval()//se ejecuta en determinado tiempo infinitamente

d.addEventListener("DOMContentLoaded",()=>{
    fondoBody.classList.add("fondo");
    mostrarDatos();
});

//agregar evento al boton para iniciar el juego
btn_iniciar.addEventListener("click", function(){
    //alert("juego iniciado");
    //comprobar que el juego este activo
    if(estoyJugando == false && nivel == 1){
        ventanaModal();
    }else if(estoyJugando == false && nivel == 2){
        estoyJugando = true;
        nivel2();
    }else if(estoyJugando == false && nivel == 3){
        estoyJugando = true;
        nivel3();
    }
    sonidoFondo.play();

});


//Funcion para agregar las imagenes al tablero 
function agregarImagenes(){
    //agregar imagenes dependiendo el nivel
    if(nivel == 1){
        imagenNivel = imgN1;
    }else if(nivel == 2){
        imagenNivel = imgN2;
    }else if(nivel == 3){
        imagenNivel = imgN3;
    }


    //colocar imagenes aleatorias
    imagenNivel.sort(()=>Math.random() -0.5)
    //recorrer con un foreach las imagenes del array
    imagenNivel.forEach((img, i)=>{
        let div = d.createElement("div");//crear div
        div.className = "col-3";//agregar clase al div
        let imagen = d.createElement("img");//crear imagen
        imagen.src = "IMG/ronaldo.png";//agregr la ubicacion de la imagen
        imagen.className = "img-fluid altura";//agregar clase a las imagenes 
        imagen.id = i;//agregar id a la imagen
        imagen.addEventListener("click", mostrarImagenes);
        div.appendChild(imagen);//agregar la imagen al div 
        tablero.appendChild(div);//agregar el div al tablero
    });
}



//funcion para mostrar las imagenes ocultas 
function mostrarImagenes(){
    sonidoSeleccionar.play();
    //obtener posicion de la imagen
    let imgID = this.getAttribute("id")
    //alert("imagen #"+imgID);
    this.src = imagenNivel[imgID].url;
    //guardar los nombres de imagen 
    nombreImg.push(imagenNivel[imgID].NOMBRE);
    //guardar los id de imagenes 
    idImg.push(imgID);

    //activar la funcion de comparar imagenes
    if(nombreImg.length == 2){
        //simular o esperar un tiempo
        setTimeout(compararImagenes, 300);    
    }
}

//funcion para comparar imagenes
function compararImagenes(){
    let allImg = d.querySelectorAll(".tablero .col-3 img");

    //verificar si las imagenes son iguales 
    if(nombreImg[0] == nombreImg[1]){
        if(idImg[0] != idImg[1]){
            //alert("Siuuu adivinaste");
            sonidoAdivinar.play
            allImg[idImg[0]].src = "IMG/aprobate.jpg";
            allImg[idImg[1]].src = "IMG/aprobate.jpg";
            allImg[idImg[0]].removeEventListener("click", mostrarImagenes);
            allImg[idImg[1]].removeEventListener("click", mostrarImagenes);
            aciertos++;
            mostrarAciertos.textContent = aciertos;
        }else{
            alert("Escoge otra imagen");
            allImg[idImg[0]].src = "IMG/ronaldo.png";
            intentos;
            mostrarIntentos.textContent = intentos;
        }  
    }else{
        //alert("Que mal, sigue intentando!!!")
        sonidoFallar.play();
        allImg[idImg[0]].src = "IMG/ronaldo.png";
        allImg[idImg[1]].src = "IMG/ronaldo.png";
        intentos++;
        mostrarIntentos.textContent = intentos;
    }
    //reiniciar las variables
    nombreImg = [];
    idImg = [];

    //comprobar si se adivinaron todas las imagenes
    if(nivel == 1 && aciertos == 6){
        alert("Avanzaste al siguiente nivel");
        //recargar la pagina 
        //location.reload();
        totalIntentos += intentos;
        totalTiempo += tiempo;
        tiempoSobrante += (60 - tiempo);
        obtenerDatos();
        sonidoGanar.play();
        nivel++;
        mostrarNivel.textContent = nivel;
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        clearInterval(tiempoTrascurrido);
        tiempo = 50;
        mostrarTiempo.textContent = tiempo;
        estoyJugando = false;
        quitarImg();
        

    }else if(nivel == 2 && aciertos == 8){
        alert("Avanzaste al siguiente nivel");
        sonidoGanar.play();
        nivel++;
        mostrarNivel.textContent = nivel;
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        clearInterval(tiempoTrascurrido);
        tiempo = 40;
        mostrarTiempo.textContent = tiempo;
        estoyJugando = false;
        quitarImg();
    }else if( nivel == 3 && aciertos == 10){
        alert("Felicitaciones ganaste el juego");
        sonidoTerminaste.play();
        location.reload();
    }

}
function nivel1(){
    //agregar las imagenes al tablero 
    agregarImagenes();
    mostrarNivel.textContent = nivel;
    TiempoDeJuego();
}
function nivel2(){
    //agregar las imagenes al tablero 
    agregarImagenes();
    TiempoDeJuego();
}
function nivel3(){
    //agregar las imagenes al tablero 
    agregarImagenes();
    TiempoDeJuego();
}

function TiempoDeJuego(){
        //controlar el tiempo del juego
        tiempoTrascurrido = setInterval( ()=>{
        tiempo--;
        mostrarTiempo.textContent = tiempo;
        if(tiempo == 13){
            alert("Rapido!! El tiempo esta por terminar");
            sonidoRegresivo.play();
            mostrarTiempo.classList.add("tiempo-agotado");
        }else if(tiempo == 0){
            alert("El tiempo se ha agotado");
            sonidoPerdiste.play();
            clearInterval(tiempoTrascurrido);
            setTimeout(()=>{
                location.reload();
            }), 3000
        }
        }, 1000); //1000 milisegundos = 1 segundo
  
}

function quitarImg(){
    let imagenQuitar = d.querySelectorAll(".tablero div");
    imagenQuitar.forEach((img)=>{
        img.remove();
    });
}

//mostrar ventana modal
function ventanaModal(){
    let mostrarModal = d.querySelector("#exampleModal");
    let cerrarModal = d.querySelectorAll(".cerrar");
    let inputJugador = d.querySelector(".nombre-jugador");
    let btnJugador = d.querySelector(".registrar-jugador");
    //botones para cerrar ventana modal
    cerrarModal.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            mostrarModal.classList.remove("show");
            mostrarModal.style.display = "none";
        });
    })
    //mostrar ventana modal
    mostrarModal.classList.add("show");
    mostrarModal.style.display = "block";
    //evento clic al boton azuldel modal
    btnJugador.addEventListener("click",()=>{
        //mostrar elnombre en el tablero
        mostrarJugador.textContent = inputJugador.value;
        //cerrar ventana modal
        mostrarModal.classList.remove("show");
        mostrarModal.style.display = "none";
        //iniciar nivel 1
        estoyJugando = true;
        nivel1();
    });
}
