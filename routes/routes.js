require("dotenv").config();
const express = require("express");
const app = express();
const got = require("got");

app.use(express.json());

app.get("/movieplot", (req, res) => {
  (async () => {
    const promptText =
      "Topic: Science Fiction\nOne-Sentence Movie Plot:People live in a world without light.\n###\nTopic: Horror\nOne-Sentence Movie Plot:Rats take over New York City.\n###\nTopic: Superhero\nOne-Sentence Movie Plot:A superhero gives up his life of valor to become evil.\n###\nTopic: Superhero\nOne-Sentence Movie Plot:A superhero gives up his life of valor to become evil.\n###\nTopic: Comedy\nOne-Sentence Movie Plot:An assassin takes the day off.\n###\nTopic: Science Fiction\nOne-Sentence Movie Plot:People now live on Mars, and it is going great—until they aren’t allowed to leave.\n###\nTopic: Science Fiction\nOne-Sentence Movie Plot:The Internet is shut down for an entire year.\n###\nTopic: Science Fiction\nOne-Sentence Movie Plot:Antarctica is now a ridiculously wonderful place to live and has a population of 2.3 million.\n###\nTopic: Science Fiction\nOne-Sentence Movie Plot:";
    const url = "https://api.openai.com/v1/engines/davinci/completions";
    const params = {
      prompt: promptText, 
      temperature: 0.75, 
      max_tokens: 25,
      top_p: 1,
      frequency_penalty: 0.7,
      presence_penalty: 0.7,
      stop: ["###"],
    };
    const headers = {
      Authorization: `Bearer ${process.env.OPEN_AI_API_KEY}`,
    };

    try {
      const response = await got
        .post(url, { json: params, headers: headers })
        .json();
      output = `${response.choices[0].text}`;
      console.log(output);
      res.send(output);
    } catch (err) {
      console.log(err);
    }
  })();
});

module.exports = app;
