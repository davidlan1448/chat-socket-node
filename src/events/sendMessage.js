module.exports = (socket, io) => {
  /**
   * Event that runs when a new message is sent
   */
  socket.on("message", async function (data) {
    io.in(data.room).emit("new message", data.message);
  });
};
