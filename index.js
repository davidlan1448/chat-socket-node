const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const socket = require("socket.io");
const events = require("./socketEvents");

const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
const io = socket(server);

io.on("connection", (socket) => {
  events(socket, io);
});

