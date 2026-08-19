require("dotenv").config();

const { App } = require("@slack/bolt");
const axios = require("axios");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});


app.command("/mee7-ping", async ({ command, ack, respond }) => {
  const start = Date.now();

  await ack();

  const latency = Date.now() - start;

  await respond({
    text: `Pong!\nLatency: ${latency}ms`
  });
});


app.command("/mee7-catfact", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://catfact.ninja/fact");

    await respond({
      text: `Cat Fact:\n${response.data.fact}`
    });
  } catch (err) {
    console.error(err);

    await respond({
      text: "Failed to fetch a cat fact."
    });
  }
});


app.command("/mee7-dog", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get(
      "https://dog.ceo/api/breeds/image/random"
    );

    await respond({
      text: `🐶 ${response.data.message}`
    });
  } catch (err) {
    console.error(err);

    await respond({
      text: "Failed to fetch a dog."
    });
  }
});


app.command("/mee7-joke", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get(
      "https://v2.jokeapi.dev/joke/Any?safe-mode&blacklistFlags=nsfw,racist,sexist,explicit"
    );

    const joke = response.data;

    if (joke.type === "single") {
      await respond({
        text: `😂 ${joke.joke}`
      });
    } else {
      await respond({
        text: `😂 ${joke.setup}\n\n${joke.delivery}`
      });
    }
  } catch (err) {
    console.error(err);

    await respond({
      text: "Failed to fetch a joke."
    });
  }
});


app.command("/mee7-fact", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get(
      "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en"
    );

    await respond({
      text: `Useless Fact:\n${response.data.text}`
    });
  } catch (err) {
    console.error(err);

    await respond({
      text: "Failed to fetch a useless fact."
    });
  }
});


app.command("/mee7-quote", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://dummyjson.com/quotes/random");

    await respond({
      text: `"${response.data.quote}"\n— ${response.data.author}`
    });
  } catch (err) {
    console.error(err);

    await respond({
      text: "Failed to fetch a quote."
    });
  }
});


app.command("/mee7-help", async ({ ack, respond }) => {
  await ack();

  await respond({
    text:
`Available Commands:

/mee7-ping - Check bot latency
/mee7-catfact - Get a random cat fact
/mee7-dog - Get a random dog
/mee7-joke - Get a random joke
/mee7-fact - Get a random useless fact
/mee7-quote - Get a random quote
/mee7-help - Show this help message`
  });
});

(async () => {
  await app.start();

  console.log("bot is running!");
})();