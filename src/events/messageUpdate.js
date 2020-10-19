module.exports = (socket, io) => {
  /**
   * Event that is executed when a message is modified
   */
  socket.on("message-updated", (data) => {
    io.in(data.room).emit("new-message-updated", data.message);
  });
};
