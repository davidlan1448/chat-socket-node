module.exports = (socket) => {
  /**
   * Event that runs when you want to know the users connected in the room
   */
  socket.on("users-connected", (data) => {
    socket.broadcast.to(data.room).emit("user-connected-in-room", {
      user: data.userId,
      message: "this user is connected",
    });
  });
};
