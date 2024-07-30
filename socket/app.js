import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:5173",
  },
});

let onlineUser = [];

const addUser = (userId, socketId) => {
  const userExists = onlineUser.find((user) => user.userId === userId);
  if (!userExists) {
    onlineUser.push({ userId, socketId });
    console.log(`User added: ${userId}, socketId: ${socketId}`);
  }
};

const removeUser = (socketId) => {
  onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
  console.log(`User removed: socketId: ${socketId}`);
};

const getUser = (userId) => {
  return onlineUser.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);
  //The server then associates the socket ID with the user ID
  socket.on("newUser", (userId) => {
    addUser(userId, socket.id);
    console.log(userId, socket.id)
  });

  socket.on("sendMessage", ({ receiverId, data }) => {
    console.log(`Message to send from ${socket.id} to ${receiverId}: ${JSON.stringify(data)}`);
    const receiver = getUser(receiverId);
    if (receiver) {
      io.to(receiver.socketId).emit("getMessage", data);
      console.log(`Message sent from ${socket.id} to ${receiver.socketId}`);
    } else {
      console.log(`Receiver not found or not online: ${receiverId}`);
    }
  });

  socket.on("disconnect", () => {
    removeUser(socket.id);
    console.log("A user disconnected:", socket.id);
  });
});

io.listen(4000, () => {
  console.log("Server is running on port 4000");
});
