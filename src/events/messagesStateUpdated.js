module.exports = (socket, io) => {
  socket.on("messages-state-updated", (data) => {
    io.in(data.room).emit("new-messages-state-updated", data.messagesUpdated);
  });
};
