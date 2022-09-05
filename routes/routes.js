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
      prompt: promptText, //add adjectives; make it random; add a content filter
      temperature: 0.75, //do a random number
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

app.get("/superheromovieplot", (req, res) => {
  (async () => {
    const promptText =
      "Topic: Science Fiction\nOne-Sentence Movie Plot:People live in a world without light.\n###\nTopic: Horror\nOne-Sentence Movie Plot:Rats take over New York City.\n###\nTopic: Superhero\nOne-Sentence Movie Plot:A superhero gives up his life of valor to become evil.\n###\nTopic: Superhero\nOne-Sentence Movie Plot:A superhero gives up his life of valor to become evil.\n###\nTopic: Comedy\nOne-Sentence Movie Plot:An assassin takes the day off.\n###\nTopic: Science Fiction\nOne-Sentence Movie Plot:People now live on Mars, and it is going great—until they aren’t allowed to leave.\n###\nTopic: Science Fiction\nOne-Sentence Movie Plot:The Internet is shut down for an entire year.\n###\nTopic: Science Fiction\nOne-Sentence Movie Plot:Antarctica is now a ridiculously wonderful place to live and has a population of 2.3 million.\n###\nTopic: Superhero\nOne-Sentence Movie Plot:";
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

app.get("/businessidea", (req, res) => {
  (async () => {
    const promptText =
      //  "Business ideas involving fitness\n\n1. Build a Fitness App\n###\n2. Create a Fitness Course\n###\n3. Sell Dietary Supplements\n###\n4. Become a YouTube Fitness Vlogger\n###\n5. Start a Health and Fitness Blog\n###\n6. Start a Health Coaching Business\n###\n7.";
      "Future business ideas\n\n1. Cryptocurrency\n###\n2. Startup cities\n###\n3. Reverse aging\n###\n4. Brain-machine-interface\n###\n5. Robotics\n###\n6. Digital nomadism\n###\n7. AI-assisted content creation\n###\n8. VR as office replacement\n###\n9. Pseudonymity\n###\n10. 3D printing of metals\n###\n11.";
    const url = "https://api.openai.com/v1/engines/davinci/completions";
    const params = {
      prompt: promptText,
      temperature: 0.86,
      max_tokens: 20,
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

app.post("/blogpost", (req, res) => {
  (async () => {
    const promptBlogTitle = req.body.blogTitle;
    console.log("Title: " + promptBlogTitle);

    const promptText =
      "Write a blog based on this title:\n\nTitle: Hard work vs Long work\n13 sentences Blog:\nLong work is what the lawyer who bills 14 hours a day filling in forms does.\n\nHard work is what the insightful litigator does when she synthesizes four disparate ideas and comes up with an argument that wins the case–in less than five minutes.\n\nLong work has a storied history. Farmers, hunters, factory workers… Always there was long work required to succeed. For generations, there was a huge benefit that came to those with the stamina and fortitude to do long work.\n\nHard work is frightening. We shy away from hard work because inherent in hard work is risk. Hard work is hard because you might fail. You can’t fail at long work, you merely show up. You fail at hard work when you don’t make an emotional connection, or when you don’t solve the problem or when you hesitate.\n\nI think it’s worth noting that long work often sets the stage for hard work. If you show up enough and practice enough and learn enough, it’s more likely you will find yourself in a position to do hard work.\n\nIt seems, though that no matter how much long work you do, you won’t produce the benefits of hard work unless you are willing to leap.\n###\nTitle: The world's worst boss\n18 sentences Blog:\nThat would be you.\n\nEven if you’re not self-employed, your boss is you. You manage your career, your day, your responses. You manage how you sell your services and your education and the way you talk to yourself.\n\nOdds are, you’re doing it poorly.\n\nIf you had a manager that talked to you the way you talked to you, you’d quit. If you had a boss that wasted as much of your time as you do, they’d fire her. If an organization developed its employees as poorly as you are developing yourself, it would soon go under.\n\nI’m amazed at how often people choose to fail when they go out on their own or when they end up in one of those rare jobs that encourages one to set an agenda and manage themselves. Faced with the freedom to excel, they falter and hesitate and stall and ultimately punt.\n\nWe are surprised when someone self-directed arrives on the scene. Someone who figures out a way to work from home and then turns that into a two-year journey, laptop in hand, as they explore the world while doing their job. We are shocked that someone uses evenings and weekends to get a second education or start a useful new side business. And we’re envious when we encounter someone who has managed to bootstrap themselves into happiness, as if that’s rare or even uncalled for.\n\nThere are few good books on being a good manager. Fewer still on managing yourself. It’s hard to think of a more essential thing to learn.\n###\nTitle: " +
      promptBlogTitle +
      "\n18 sentences Blog:";
    const url = "https://api.openai.com/v1/engines/davinci/completions";
    const params = {
      prompt: promptText,
      temperature: 0.7,
      max_tokens: 300,
      top_p: 1,
      frequency_penalty: 0.8,
      presence_penalty: 0.8,
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

app.post("/textsummary", (req, res) => {
  (async () => {
    const promptUserText = req.body.userText;
    console.log("User Text: " + promptUserText);

    const promptText =
      "Text: \nCLINICAL HISTORY: Cough, congestion. COMMENTS: PA and lateral views of chest reveals no evidence of active pleural or pulmonary parenchymal abnormality. There are diffusely increased interstitial lung markings consistent with chronic bronchitis. Underlying pulmonary fibrosis is not excluded. The cardiac silhouette is enlarged. The mediastinum and pulmonary vessels appear normal. Aorta is tortuous. Degenerative changes are noted in the thoracic spine.\n\nSummarize:\n1. No evidence of acute pulmonary pathology.\n2. Enlarged cardiac silhouette.\n3. Tortuous aorta.\n4. Diffusely increased interstitial lung markings consistent with chronic bronchitis. Underlying pulmonary fibrosis is not excluded.\n###\nText:\n" +
      promptUserText +
      "\n\nSummarize:";
    const url =
      "https://api.openai.com/v1/engines/davinci-instruct-beta/completions";
    const params = {
      prompt: promptText,
      temperature: 0.5,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
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

/*

import os
import openai

openai.api_key = os.environ["OPENAI_API_KEY"]

response = openai.Completion.create(
  engine="davinci-instruct-beta",
  prompt="Text: \nCLINICAL HISTORY: Cough, congestion. COMMENTS: PA and lateral views of chest reveals no evidence of active pleural or pulmonary parenchymal abnormality. There are diffusely increased interstitial lung markings consistent with chronic bronchitis. Underlying pulmonary fibrosis is not excluded. The cardiac silhouette is enlarged. The mediastinum and pulmonary vessels appear normal. Aorta is tortuous. Degenerative changes are noted in the thoracic spine.\n\nSummarize:\n1. No evidence of acute pulmonary pathology.\n2. Enlarged cardiac silhouette.\n3. Tortuous aorta.\n4. Diffusely increased interstitial lung markings consistent with chronic bronchitis. Underlying pulmonary fibrosis is not excluded.\n###\nText:\n" + promptUserText + "\n\nSummarize:",
  temperature=0.5,
  max_tokens=100,
  top_p=1,
  frequency_penalty=0,
  presence_penalty=0,
  stop=["###"]
)




*/
