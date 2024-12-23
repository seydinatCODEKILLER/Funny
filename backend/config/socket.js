import { Server } from "socket.io";

const configureSocket = (server) => {
  const io = new Server(server, {
    cors: { origin: "*" },
  });
  io.on("connection", (socket) => {
    console.log(" Utilisateur connecté :", socket.id);

    // Créer une salle de quiz
    socket.on("createRoom", (roomName) => {
      socket.join(roomName);
      console.log(`Salle créée : ${roomName}`);
      socket.emit("roomCreated", { roomName });
    });

    // Rejoindre une salle de quiz
    socket.on("joinRoom", (roomName) => {
      const room = io.sockets.adapter.rooms.get(roomName);
      if (room && room.size < 4) {
        socket.join(roomName);
        io.to(roomName).emit("roomJoined", {
          message: `Un joueur a rejoint la salle ${roomName}.`,
          playerId: socket.id,
        });
      } else {
        socket.emit("roomError", "Salle pleine ou inexistante.");
      }
    });

    // Synchroniser les questions
    socket.on("startQuiz", ({ roomName, questions }) => {
      io.to(roomName).emit("quizStarted", questions);
    });

    // Recevoir et diffuser les scores
    socket.on("submitAnswer", ({ roomName, playerId, score }) => {
      io.to(roomName).emit("updateScores", { playerId, score });
    });

    socket.on("disconnect", () => {
      console.log("Utilisateur déconnecté :", socket.id);
    });
  });
  return io;
};

export default configureSocket;
