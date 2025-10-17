# 🤖 Chatbot Node.js + OpenAI + Render

Este é um chatbot inteligente criado em **Node.js**, que utiliza a **API da OpenAI (ChatGPT)** para gerar respostas automáticas.  
Ele pode ser integrado futuramente com o **WhatsApp, Telegram ou site**, e roda **100% na nuvem pelo Render.com**.

---

## 🚀 Funcionalidades
- Recebe mensagens via requisição HTTP (rota `/chat`);
- Gera respostas automáticas usando IA;
- Hospedado 24h online na nuvem (Render);
- Código base simples e fácil de expandir.

---

## 🧩 Tecnologias usadas
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [OpenAI API](https://platform.openai.com/docs/)

---

## ⚙️ Como rodar localmente

1️⃣ Clonar o repositório
git clone https://github.com/isaac15andrade/meu-chatbot.git
cd chatbot-node

2️⃣ Instalar dependências
npm install

3️⃣ Criar o arquivo .env
Crie um arquivo chamado .env na raiz do projeto com:
OPENAI_API_KEY=sua_chave_aqui
PORT=3000

4️⃣ Rodar o servidor
npm start

