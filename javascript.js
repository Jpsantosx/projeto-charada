// --- ELEMENTOS ORIGINAIS ---
const cardInner = document.getElementById('card-inner');
const campoPergunta = document.getElementById('pergunta');
const campoResposta = document.getElementById('resposta');
const btnNova = document.getElementById('btn-nova');

// --- NOVOS ELEMENTOS ---
const btnVerificar = document.getElementById('btn-verificar');
const inputPalpite = document.getElementById('input-palpite');
const feedback = document.getElementById('feedback');
const listaHistorico = document.getElementById('historico');

// Evento original: Gira o card
cardInner.addEventListener('click', function girar() {
    cardInner.classList.toggle('[transform:rotateY(180deg)]');
});

// Função original: Busca dados da API
async function buscarCharada() {
    try {
        const url = 'https://charada-drab.vercel.app';
        const endPoint = '/charadas/aleatorias';

        cardInner.classList.remove('[transform:rotateY(180deg)]');

        const respostaApi = await fetch(url + endPoint);
        if (!respostaApi.ok) throw new Error('Erro na rede');

        const dados = await respostaApi.json();
        
        campoPergunta.textContent = dados.pergunta;
        campoResposta.textContent = dados.resposta;

    } catch (erro) {
        console.error("Erro ao buscar charada:", erro);
        campoPergunta.textContent = 'Ops, algo deu errado. Tente novamente mais tarde.';
        campoResposta.textContent = '';
    }
}

// --- LÓGICA DAS NOVAS FUNCIONALIDADES ---

// 1. Verificar Palpite
btnVerificar.addEventListener('click', () => {
    const palpite = inputPalpite.value.trim().toLowerCase();
    const respostaReal = campoResposta.textContent.trim().toLowerCase();

    if (!palpite) return;

    feedback.classList.remove('hidden');

    // Validação: Acerto exato ou se o palpite está contido na resposta (mínimo 4 letras)
    if (palpite === respostaReal || (respostaReal.includes(palpite) && palpite.length > 3)) {
        feedback.textContent = "✅ Excelente! Você acertou!";
        feedback.className = "mt-3 text-sm font-bold text-center text-green-600";
        cardInner.classList.add('[transform:rotateY(180deg)]');
    } else {
        feedback.textContent = "❌ Não foi dessa vez! Tente de novo.";
        feedback.className = "mt-3 text-sm font-bold text-center text-red-500";
    }
});

// 2. Histórico e Reset (Usa um observador para agir quando a pergunta mudar)
function adicionarAoHistorico(pergunta, resposta) {
    if (!pergunta || pergunta.includes("Carregando")) return;

    const li = document.createElement('li');
    li.className = "bg-white/50 p-3 rounded-lg border border-lime-200 text-sm shadow-sm animate-fade-in";
    li.innerHTML = `<strong>Q:</strong> ${pergunta}<br><span class="text-blue-600 text-xs">R: ${resposta}</span>`;

    listaHistorico.prepend(li);

    // Mantém apenas as 3 últimas
    if (listaHistorico.children.length > 3) {
        listaHistorico.removeChild(listaHistorico.lastChild);
    }
}

// Observador para resetar campos e salvar histórico automaticamente
const observer = new MutationObserver(() => {
    // Sempre que o texto mudar, limpamos o input e o feedback
    inputPalpite.value = "";
    feedback.classList.add('hidden');
    
    // O histórico é atualizado com o que estava ANTES (lógica interna simplificada)
    // Para fins de simplicidade, chamamos a função quando clicamos em "Nova" 
    // ou deixamos o observer detectar a mudança de texto.
});

observer.observe(campoPergunta, { childList: true });

// Modificação no botão "Nova" para alimentar o histórico antes de trocar
btnNova.addEventListener('click', () => {
    adicionarAoHistorico(campoPergunta.textContent, campoResposta.textContent);
    buscarCharada();
});

// Inicialização
buscarCharada();