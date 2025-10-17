import venom from 'venom-bot';

// Inicializa o WhatsApp
venom.create({
  session: 'meu-chatbot-whatsapp', // nome da sessão
  multidevice: true // opcional, permite usar WhatsApp multi-dispositivo
})
.then(client => start(client))
.catch(err => console.log(err));

// Função principal
function start(client) {
  console.log('🤖 WhatsApp conectado!');

  // Recebendo mensagens
  client.onMessage(async (message) => {
    if (message.isGroupMsg === false) { // só responde em chats individuais
      console.log(`Mensagem recebida de ${message.sender.pushname}: ${message.body}`);

      // Aqui você pode integrar com seu chatbot
      // Exemplo simples:
      const resposta = await responderMensagem(message.body);
      client.sendText(message.from, resposta);
    }
  });
}

// Função que integra com seu chatbot
async function responderMensagem(msg) {
  // Aqui você pode chamar sua lógica de estoque ou IA
  if (msg.toLowerCase().includes('camisa')) {
    return 'Temos Camisa Polo por R$79,90 😎';
  }
  return 'Olá! Eu sou seu assistente virtual 😄. Pergunte sobre nossos produtos!';
}

