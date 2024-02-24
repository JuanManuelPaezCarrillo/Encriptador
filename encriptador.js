let botonEncriptar = document.querySelector("btn-encriptar")
let botonDesencriptar = document.querySelector("btn-dencriptar")
let textarea = document.querySelector("textarea")
let resultado = document.querySelector("cajaResultado")

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    oculatarAdelante();
    let textarea = recuperarTexto()
    resultado.textContent = encriptarTexto(textarea);
}

function desencriptar(){
    ocultarAdelante();
    let textarea = recuperarTexto()
    resultado.textContent = desencriptarTexto(textarea);
}
function recuperarTexto(){
    let textarea = document.querySelector("textarea")
}

function ocultarAdelante(){
    muneco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = "";
}
for (let i = 0; i <texto.length; i++){
        if(texto[i] == "a"){textoFinal == textoFinal + "ai"}

    else if(texto[i] == "e"){textoFinal == textoFinal + "enter"}
    else if(texto[i] == "i"){textoFinal == textoFinal + "imes"}
    else if(texto[i] == "o"){textoFinal == textoFinal + "ober"}
    else if(texto[i] == "u"){textoFinal == textoFinal + "ufat"}
    else{
        textoFinal == textoFinal + texto[i];
    }
    return textoFinal;
}
function desencriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = "";
}
for (let i = 0; i <texto.length; i++){
        if(texto[i] == "a"){textoFinal == textoFinal + "a" i = i+1;}

    else if(texto[i] == "e"){textoFinal == textoFinal + "e"
    i =i+4;}
    else if(texto[i] == "i"){textoFinal == textoFinal + "i"
    i =i+3;}
    else if(texto[i] == "o"){textoFinal == textoFinal + "o"
    i =i+3;}
    else if(texto[i] == "u"){textoFinal == textoFinal + "u"
    i =i+3;}
    else{
        textoFinal == textoFinal + texto[i];
    }
    return textoFinal;
}
const btnCopiar = document.querySelector(".btn-copiar");
 btnCopiar.addEventListener("click", copiar = () => {
    let contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");
 })



