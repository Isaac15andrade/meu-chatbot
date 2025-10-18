import express from "express";
import venom from "venom-bot";

const app = express();
const port = process.env.PORT || 3000;

// Cria a instância do bot
venom
  .create({
    session: "meu-chatbot-whatsapp",
    multidevice: true, // necessário pra funcionar no WhatsApp atual
    headless: true, // deixa o navegador oculto (Render não tem interface gráfica)
    logQR: true, // mostra o QR code direto no log
    disableSpins: true,
  })
  .then((client) => start(client))
  .catch((err) => {
    console.error("Erro ao iniciar o Venom:", err);
  });

// Função principal de respostas
function start(client) {
  console.log("🤖 Bot iniciado com sucesso!");

  client.onMessage(async (message) => {
    console.log("📩 Mensagem recebida:", message.body);

    if (message.body.toLowerCase() === "oi") {
      await client.sendText(message.from, "Olá! 😊 Como posso te ajudar hoje?");
    } else if (message.body.toLowerCase().includes("produto")) {
      await client.sendText(
        message.from,
        "Temos vários produtos disponíveis! Qual categoria você gostaria de ver?"
      );
    } else {
      await client.sendText(
        message.from,
        "Desculpe, não entendi 🤔. Pode repetir de outra forma?"
      );
    }
  });
}

// Servidor Express pra manter o app vivo na Render
app.get("/", (req, res) => res.send("🤖 Meu Chatbot está online!"));
app.listen(port, () =>
  console.log(`Servidor ativo em http://localhost:${port}`)
);

