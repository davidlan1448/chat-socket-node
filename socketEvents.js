const join = require("./src/events/join");
const leave = require("./src/events/leave");
const sendMessage = require("./src/events/sendMessage");
const usersConnected = require("./src/events/usersConnected");
const messageUpdate = require("./src/events/messageUpdate");
const messagesStateUpdated = require("./src/events/messagesStateUpdated");
const roomState = require("./src/events/roomState");

module.exports = (socket, io) => {
  join(socket);
  leave(socket);
  usersConnected(socket);
  sendMessage(socket, io);
  messageUpdate(socket, io);
  messagesStateUpdated(socket, io);
  roomState(socket, io);
};
