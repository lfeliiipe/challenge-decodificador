// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"
let dicionario = [
    {letra: 'a', codigo: 'ai'},
    {letra: 'e', codigo: 'enter'},
    {letra: 'i', codigo: 'imes'},
    {letra: 'o', codigo: 'ober'},
    {letra: 'u', codigo: 'ufat'}
]

function codifica() {
    let textoBruto = document.querySelector('.conteudo__entrada__texto').value;
    let textoLimpo = '';
    for(let i = 0; i < textoBruto.length; i++) {
        let termo = letraEspecial(textoBruto[i]);
        if(termo) {
            textoLimpo += termo.codigo;
        } else {
            textoLimpo += textoBruto[i];
        }
    }
    mostraTexto(textoLimpo);
}

function decodifica() {
    let textoBruto = document.querySelector('.conteudo__entrada__texto').value;
    let textoLimpo = textoBruto;
    for(let i = 0; i < textoLimpo.length; i++) {
        for(let termo of dicionario) {
            if(textoLimpo.slice(i).startsWith(termo.codigo)) {
                textoLimpo =  textoLimpo.replace(termo.codigo, termo.letra);
            }
        }
    }
    mostraTexto(textoLimpo);
}

function letraEspecial(letra) {
    for(let termo of dicionario) {
        if(termo.letra === letra) {
            return termo;
        }
    }
}

function mostraTexto(texto) {
    const saidaVazia = document.querySelector('.conteudo__saida__vazia');
    saidaVazia.style.display = 'none';

    const saidaTexto = document.querySelector('.conteudo__saida__texto');
    saidaTexto.innerHTML = texto;
    saidaTexto.style.display = 'block';

    const botaoCopia = document.querySelector('.conteudo__saida__copia');
    botaoCopia.style.display = 'block';
}

function copiaTexto() {
    let texto = document.querySelector('.conteudo__saida__texto').innerText;
    navigator.clipboard.writeText(texto);
}
