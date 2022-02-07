var cartaUsu= pedirCartaUsuario();

cartaCompu(cartaUsu);


function cartaCompu(cartaUsu){
    var myArray = ['Piedra', 'Papel', 'Tijera'];
    var rand = Math.floor(Math.random()*myArray.length);
    var rValue = myArray[rand];
    evaluacionCartas(cartaUsu, rValue);
}



function pedirCartaUsuario(){
    var carta = prompt("Ingrese su valor, Puede ser Piedra, Papel o Tijera")
    return carta;
}

function evaluacionCartas(cartaUsuario, cartaMaquina){
    var resultado = (cartaUsuario == cartaMaquina ? "Empate":"Diferentes");
    if (resultado == "Empate") {
        alert(`Usuario: ${cartaUsuario} y Maquina: ${cartaMaquina} = Partida Empatada`);
    }else{
        var concate = cartaUsuario + cartaMaquina;
        switch (concate) {
            case "PiedraPapel":
                alert(`Usuario: ${cartaUsuario} y Maquina: ${cartaMaquina} = Gana la Maquina`);
                creatMen();
                break;
            case "PiedraTijera":
                alert(`Usuario: ${cartaUsuario} y Maquina: ${cartaMaquina} = Gana el Usuario`);
                break;
            case "PapelPiedra":
                alert(`Usuario: ${cartaUsuario} y Maquina: ${cartaMaquina} = Gana el Usuario`);
                break;
            case "PapelTijera":
                alert(`Usuario: ${cartaUsuario} y Maquina: ${cartaMaquina} = Gana la Maquina`);
                break;
            case "TijeraPapel":
                alert(`Usuario: ${cartaUsuario} y Maquina: ${cartaMaquina} = Gana el usuario`);
                break;
            case "TijeraPiedra":
                alert(`Usuario: ${cartaUsuario} y Maquina: ${cartaMaquina} = Gana la Maquina`);
                break;
            default:
                break;
        }
    }
}


function creatMen(){
    const elemento = document.createElement("H1");
    elemento.innerText = "Hola mundo";
}