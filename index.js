import venom from "venom-bot";

venom
  .create({
    session: "meu-bot",
    headless: true,
    browserArgs: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-accelerated-2d-canvas",
      "--no-first-run",
      "--no-zygote",
      "--single-process",
      "--disable-gpu",
    ],
  })
  .then((client) => start(client))
  .catch((erro) => console.log(erro));

function start(client) {
  client.onMessage((message) => {
    if (message.body.toLowerCase() === "oi") {
      client.sendText(message.from, "Olá! Eu sou o bot 🤖");
    }
  });
}


