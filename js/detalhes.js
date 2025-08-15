function trocarImagem(elemento, novaImagem) {
    
    elemento.src = './img/cardapio/' + novaImagem; // Troca para a nova imagem
}

function restaurarImagem(elemento, imagemOriginal) {
    elemento.src = './img/cardapio/' + imagemOriginal; // Restaura a imagem original
}

window.addEventListener('scroll', function () {
    const posicao = window.scrollY;
    console.log(posicao);
    if (posicao > 100) {
        alfa = ((posicao>=300)?1:(posicao - 100) / 200);
        console.log(alfa);
        this.document.getElementById("nav").style.backgroundColor = "rgba(248, 249, 250, " + alfa + ")";
    }
    else {
        this.document.getElementById("nav").style.backgroundColor = "rgba(248, 249, 250, 0)";
    }
});
