const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
    mensagem.style.backgroundImage = "none";
    document.getElementById("inputTexto").value = "";
    document.getElementById("divTexto").style.display = "none";
}

function encriptar(stringEncriptada){
    let matrixCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrixCodigo.length; i++){
        if(stringEncriptada.includes(matrixCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrixCodigo[i][0], matrixCodigo[i][1])
        }
    } return stringEncriptada
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensagem.value = textoDesencriptado
    mensagem.style.backgroundImage = "none";
    document.getElementById("inputTexto").value = "";
    document.getElementById("divTexto").style.display = "none";
    
}

function desencriptar(stringDesencriptada){
    let matrixCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrixCodigo.length; i++){
        if(stringDesencriptada.includes(matrixCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrixCodigo[i][1], matrixCodigo[i][0])
        }
    } return stringDesencriptada
}

function copiar (){
    var textoCopiado = document.getElementById("mensagemCopiada").value;

    if(navigator.clipboard.writeText(textoCopiado)){
        document.getElementById("idBtnCopiar").textContent = "Texto Copiado";
    };
    setInterval(function(){
        document.getElementById("idBtnCopiar").textContent = "Copiar Texto";
    }, 5000)
    
    document.getElementById("mensagemCopiada").value ="";
    mensagem.style.backgroundImage = "";
    document.getElementById("divTexto").style.display = "";
    
}