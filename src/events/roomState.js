module.exports = (socket, io) => {
  /**
   * Event that runs when the status of a chat room is changed
   */
  socket.on("room-state", (data) => {
    io.emit("change-room-state", data);
  });
};
