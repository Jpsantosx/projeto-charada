
const cadInner = document.getElementById('card-inner');
const campoPergunta = document.getElementById('pergunta');
const campoResposta = document.getElementById('resposta');
const btnNova = document.getElementById('btn-nova');

// Evento que faz o card girar
cadInner.addEventListener('click', function girar() {
    cadInner.classList.toggle('[transform:rotateY(180deg)]');
})

async function buscarCharada () {
    try {

        const url = 'https://charada-iota.vercel.app'
        const endPoint = '/charadas/aleatorias';

        const respostaApi = await fetch(url + endPoint);
        console.log

        const dados = await respostaApi.json()
        console.log(dados)

        campoPergunta.textContent = dados.pergunta;
        campoResposta.textContent = dados.resposta;

    } catch (erro) {
        campoPergunta.textContent = 'Ops, algo deu errado. Tente novamente mais tarde.';
        campoResposta.textContent = '';
    }
}

btnNova.addEventListener('click', buscarCharada);

buscarCharada()