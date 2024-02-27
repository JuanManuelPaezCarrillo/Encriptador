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

if (texto.trim().length !==0){
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

let textoDesencriptado = texto
    .replace(/ufat/gi,"u")
    .replace(/ober/gi,"o")
    .replace(/imes/gi,"i")
    .replace(/enter/gi,"e")
    .replace(/ai/gi,"a");
 
    if (texto.trim().length !==0){
        document.getElementById("texto").value = textoDesencriptado;
        document.getElementById("tituloMensaje").textContent = "Texto desencriptado con éxito";
        document.getElementById("parrafo").textContent = "¡Muy bien! Puedes ingresar un nuevo texto";
        setTimeout(function() {
            window.location.reload(); // Recargar la página después de 1000 milisegundos (1 segundo)
        }, 10000);
    } else{
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";       
    }   
}  

    
