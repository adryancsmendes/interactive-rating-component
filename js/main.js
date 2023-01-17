const listaDeNotas = document.querySelectorAll(".formulario-label");//obtém a lista de todas as notas disponíveis
const formulario = document.getElementById("formulario-avaliacao");//obtém o formulário
const botaoForm = document.querySelector("formulario-botao");
const caixaAvaliacao = document.getElementById("caixa-avaliacao");
const caixaRetorno = document.getElementById("caixa-retorno");


listaDeNotas.forEach(elemento => elemento.addEventListener("click", (event)=>{//itera sob todos os itens da listaDeNotas
    notaSelecionada = event.currentTarget.dataset.nota;//obtém a nota que foi clicada
}));

function insereNotaSelecionada(nota){//coloca a nota selecionada dentro do conteúdo de texto da notaExibida
    const notaExibida = document.getElementById("conteudo-nota");
    notaExibida.innerText = nota; 

    caixaAvaliacao.classList.add("esconde-caixa");
    caixaRetorno.classList.remove("esconde-caixa")
}


formulario.addEventListener("submit", (event)=>{//escuta o ato de enviar o formulário
    event.preventDefault();//previne o refresh indesejado da página

    if(typeof notaSelecionada !== "undefined"){//se a nota não tiver sido selecionada é exibido um alert pedindo que a nota seja selecionada
    insereNotaSelecionada(notaSelecionada);
    }else{
        alert("Please, rate us! =)");
    }
});







