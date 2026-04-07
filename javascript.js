const cardInner = document.getElementById('card-inner'); // Corrigi o nome da const para ficar claro
const campoPergunta = document.getElementById('pergunta');
const campoResposta = document.getElementById('resposta');
const btnNova = document.getElementById('btn-nova');

// Evento que faz o card girar
cardInner.addEventListener('click', function girar() {
    cardInner.classList.toggle('[transform:rotateY(180deg)]');
});

async function buscarCharada() {
    try {
        // 1. Atualizei a URL para a que você me passou (charada-drab.vercel.app)
        const url = 'https://charada-drab.vercel.app';
        const endPoint = '/charadas/aleatorias';

        // Resetar o card para a posição frontal antes de mostrar a nova pergunta
        cardInner.classList.remove('[transform:rotateY(180deg)]');

        const respostaApi = await fetch(url + endPoint);
        
        if (!respostaApi.ok) throw new Error('Erro na rede');

        const dados = await respostaApi.json();
        
        // 2. Corrigi o preenchimento dos campos
        campoPergunta.textContent = dados.pergunta;
        campoResposta.textContent = dados.resposta;

    } catch (erro) {
        console.error("Erro ao buscar charada:", erro);
        campoPergunta.textContent = 'Ops, algo deu errado. Tente novamente mais tarde.';
        campoResposta.textContent = '';
    }
}

btnNova.addEventListener('click', buscarCharada);

// Carregar a primeira charada ao abrir a página
buscarCharada();