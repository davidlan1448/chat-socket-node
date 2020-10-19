module.exports = (socket) => {
  /**
   * Event that runs when a user connects to the room
   */
  socket.on("join", (data) => {
    /* joining */
    socket.join(data.room);

    /* Sent to all customers in the room except the sender */
    socket.broadcast
      .to(data.room)
      .emit("new-user-joined", {
        user: data.userId,
        message: "has joined this room.",
      });
  });
};
