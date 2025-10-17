import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config(); // carrega variáveis do .env local (Render faz isso automaticamente na nuvem)

const app = express();
app.use(express.json());

// rota de teste
app.get("/", (req, res) => {
  res.send("🤖 Chatbot com OpenAI está rodando!");
});

// rota principal do chat
app.post("/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Mensagem não enviada." });
  }

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: message }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    const reply = response.data.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error("Erro na API:", error.response?.data || error.message);
    res.status(500).json({ error: "Erro ao processar a resposta da IA." });
  }
});

// Render define a porta automaticamente
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Servidor rodando na porta ${PORT}`));

