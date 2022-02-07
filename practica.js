
function pedirCartaUsuario(){
    const carta = document.getElementById("respuesta");
    const resp = carta.value;
    if (resp != "") {
        cartaCompu(resp);
        return resp;
    }else{
        alert("Seleccion un valor !!");
    }
}


function cartaCompu(cartaUsu){
    var myArray = ['Piedra', 'Papel', 'Tijera'];
    var rand = Math.floor(Math.random()*myArray.length);
    var rValue = myArray[rand];
    evaluacionCartas(cartaUsu, rValue);
}

function evaluacionCartas(cartaUsuario, cartaMaquina){
    var resultado = (cartaUsuario == cartaMaquina ? "Empate":"Diferentes");
    if (resultado == "Empate") {
        mensajeHTML(cartaUsuario, cartaMaquina, "Empate");
    }else if(resultado == "Diferentes") {
        if (cartaUsuario == "Piedra" && cartaMaquina == "Papel") {
            mensajeHTML(cartaUsuario, cartaMaquina, "Gana la Maquina");
        }
        if (cartaUsuario == "Piedra" && cartaMaquina == "Tijera") {
            mensajeHTML(cartaUsuario, cartaMaquina, "Gana el Usuario");
        }
        if (cartaUsuario == "Papel" && cartaMaquina == "Piedra") {
            mensajeHTML(cartaUsuario, cartaMaquina, "Gana el Usuario");
        }
        if (cartaUsuario == "Papel" && cartaMaquina == "Tijera") {
            mensajeHTML(cartaUsuario, cartaMaquina, "Gana la Maquina");
        }
        if (cartaUsuario == "Tijera" && cartaMaquina == "Papel") {
            mensajeHTML(cartaUsuario, cartaMaquina, "Gana el Usuario");
        }
        if (cartaUsuario == "Tijera" && cartaMaquina == "Piedra") {
            mensajeHTML(cartaUsuario, cartaMaquina, "Gana la Maquina");
        }
    }
}


function mensajeHTML(cartaUsu, cartaMaq, ganador) {

        const mens1 = document.getElementById("mens1");
        mens1.innerHTML = `Carta usuario: ${cartaUsu}, Carta maquina: ${cartaMaq}`;
    
        const mens = document.getElementById("mens3");
        mens.innerText = ganador;
    
}

function resetValue() {
    const sel = document.getElementById("respuesta");
    sel.remove(sel.selectedIndex);
}