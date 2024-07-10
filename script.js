document.addEventListener("DOMContentLoaded", function() {
    const dataAtualElemento = document.getElementById("dataAtual");
    const mensagemElemento = document.getElementById("mensagem");

    function atualizarData() {
        const dataAtual = new Date();

        const options = { month: 'long', day: 'numeric' };
        const dataFormatada = dataAtual.toLocaleDateString('pt-BR', options);
                                        

        dataAtualElemento.textContent = dataFormatada;

        // Adicione sua mensagem aqui
        mensagemElemento.textContent = "Disponível para trabalho!";
    }

    atualizarData();
});