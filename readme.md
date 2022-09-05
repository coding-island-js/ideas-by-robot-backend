# Meet my latest project - I built "ideas by robot" using HTML, CSS, and Vanilla JS

## Meet my latest project - [ideas by robot](https://ideasbyrobot.netlify.app/)

I love movies. So much so, I have a podcast where I do a deep dive on movies I love - [Talking Cinema](https://talkingcinema.transistor.fm/).

I love building web apps that I would use myself.

I love to write and have always wanted to write a screenplay.

So I created an app that helps you with a movie idea - a one-sentence science fiction movie plot.

## Front-End ([GitHub repo](https://github.com/coding-island-js/ideas-by-robot-frontend))

This front end is as simple as it gets. I used HTML, CSS, and Vanilla Javascript. That’s it. It’s amazing what you can build with no front-end framework.

The webpage has one button that makes a fetch request for a one-sentence movie plot to the back-end server and retrieves that request to display on the front-end.

## Back-End ([GitHub repo](https://github.com/coding-island-js/ideas-by-robot-backend))

I built an express nodeJS server for the back-end. I used GOT for my HTTP request library.

I send some sample prompts to the GPT-3 API so the AI knows what I am asking for and expecting in return. 

In this case, I want the AI to send me a one-sentence science fiction movie plot.

After sending the prompts to the GPT-3 API, I get a one-sentence movie plot from the AI. The movie plot then gets sent back to the front-end, ready to be displayed on the web page.

## Summing it up (TL;DR)

1. Created a Front-End with HTML, CSS, and Vanilla JS
    1. One button to fetch a science fiction movie plot from the back-end
2. Created a Back-End express NodeJS server
    2. Used the GOT library to communicate with the GPT-3 API
    3. Send the request back to the Front-End to display the one-sentence movie plot on the web page