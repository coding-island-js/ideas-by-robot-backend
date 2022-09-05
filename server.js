// server setup
require("dotenv").config();
const express = require("express");
const cors = require("cors");

//create router
const router = require("./routes/routes.js");

const app = express();

app.use(express.json());

app.use(
  cors({
   // origin: "http://localhost:5500",
     origin: "https://ideasbyrobot.netlify.app",
  })
);

app.use(router);


// start server

const port = process.env.PORT;

app.listen(port || 8080, () => {
  console.log("all systems are a go on port " + port);
});
