import { Server } from "socket.io";

const configureSocket = (server) => {
  const io = new Server(server, {
    cors: { origin: "*" },
  });
  io.on("connection", (socket) => {
    console.log(" Utilisateur connecté :", socket.id);
    socket.on("disconnect", () => {
      console.log("Utilisateur déconnecté :", socket.id);
    });
  });
  return io;
};

export default configureSocket;
