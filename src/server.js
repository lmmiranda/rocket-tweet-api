const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

const server = require("http").Server(app);
const io = require("socket.io")(server);

mongoose.connect(
  "mongodb+srv://rockettweet:rockettweet@cluster0-gxkue.mongodb.net/rockettweet?retryWrites=true",
  {
    useNewUrlParser: true
  }
);

app.use((req, res, next) => {
  req.io = io;
  return next();
});

app.use(express.json());
app.use(require("./routes"));

server.listen(3333);
