module.exports = (socket) => {
  socket.on("leave", function (data) {
    console.log(data.user + "left the room : " + data.room);

    socket.broadcast
      .to(data.room)
      .emit("left room", { user: data.user, message: "has left this room." });

    socket.leave(data.room);
  });
};
