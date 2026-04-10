# 🎲 Gerador de Charadas Interativo
### Desenvolvido por: **João Pedro Stadler** 🚀

Um web app divertido e responsivo que consome uma API de charadas, permitindo ao usuário tentar adivinhar a resposta antes de revelá-la. Inclui sistema de palpites, animações de card 3D e histórico de jogadas.

### 🔗 [Acesse o Projeto na Vercel](https://SEU-LINK-DA-VERCEL-AQUI.vercel.app)

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

## ✨ Funcionalidades

* **Busca Dinâmica:** Consome charadas aleatórias de uma API externa em tempo real.
* **Card 3D:** Interface interativa com efeito de rotação (flip) para esconder/revelar a resposta.
* **Sistema de Palpites:** Campo para o usuário digitar o que acha que é a resposta.
* **Validação Inteligente:** O sistema verifica se o palpite está correto (mesmo que não seja idêntico, por proximidade de palavras).
* **Histórico Recente:** Lista as últimas charadas visualizadas para você não perder nenhuma.
* **Design Responsivo:** Feito com Tailwind CSS, totalmente adaptável a dispositivos móveis.

## 🚀 Como visualizar

1.  Clone este repositório ou baixe os arquivos.
2.  Abra o arquivo `index.html` em qualquer navegador moderno.
3.  Certifique-se de estar conectado à internet para que as charadas sejam carregadas da API.

## 🛠️ Tecnologias Utilizadas

* **HTML5** para a estrutura.
* **Tailwind CSS** para a estilização via CDN.
* **JavaScript (Vanilla)** para manipulação do DOM, Fetch API e lógica do jogo.
* **API de Charadas:** [charada-drab.vercel.app](https://charada-drab.vercel.app)

## 🧩 Estrutura de Arquivos

```text
├── index.html      # Estrutura principal e estilização
└── javascript.js   # Lógica da API, Flip do Card, Palpites e Histórico