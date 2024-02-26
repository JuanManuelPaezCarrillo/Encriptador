function encriptar(){
    let texto = document.getElementById("texto").value; 
    let tituloMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafo");

let textoEncriptado = texto
    .replace(/a/gi,"ai")
    .replace(/e/gi,"enter")
    .replace(/i/gi,"imes")
    .replace(/o/gi,"ober")
    .replace(/u/gi,"ufat"); 

if (texto.length !=0){
    document.getElementById("texto").value = textoEncriptado;
    document.getElementById("tituloMensaje").textContent = "Texto encriptado con éxito";
    document.getElementById("parrafo").textContent = "¡AVISO! puedes continuar encriptando o da clic en desencriptar";
} else{
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";  
}
}
function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafo");

let textoEncriptado = texto
    .replace(/ai/gi,"a")
    .replace(/enter/gi,"e")
    .replace(/imes/gi,"i")
    .replace(/ober/gi,"o")
    .replace(/ufat/gi,"u");
 
    if (texto.length !=0){
        document.getElementById("texto").value = textoEncriptado;
        document.getElementById("tituloMensaje").textContent = "Texto desencriptado con éxito";
        document.getElementById("parrafo").textContent = "¡Muy bien! Puedes ingresar un nuevo texto";
    } else{
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";       
    }
}