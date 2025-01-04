import { Server } from "socket.io";

const configureSocket = (server) => {
  // Initialisation de Socket.IO
  const io = new Server(server, {
    cors: {
      origin: "*", // Remplacez par votre domaine pour des raisons de sécurité
      methods: ["GET", "POST"],
    },
  });

  // Gestion des événements Socket.IO
  io.on("connection", (socket) => {
    console.log(`Nouvelle connexion : ${socket.id}`);

    // Rejoindre une partie
    socket.on("joinGame", ({ gameCode, username }) => {
      socket.join(gameCode);
      console.log(`${username} a rejoint la partie ${gameCode}`);

      // Notifiez les autres joueurs dans la même salle
      socket.to(gameCode).emit("playerJoined", { username });
    });

    // Départ d'un joueur
    socket.on("leaveGame", ({ gameCode, username }) => {
      socket.leave(gameCode);
      console.log(`${username} a quitté la partie ${gameCode}`);

      // Notifiez les autres joueurs dans la salle
      socket.to(gameCode).emit("playerLeft", { username });
    });

    // Réception de réponses
    socket.on("answer", ({ gameCode, username, answer }) => {
      console.log(
        `Réponse reçue de ${username} pour la partie ${gameCode}: ${answer}`
      );

      // Diffusez la réponse aux autres joueurs ou traitez-la côté serveur
      io.to(gameCode).emit("playerAnswer", { username, answer });
    });

    // Déconnexion
    socket.on("disconnect", () => {
      console.log(`Déconnexion du client : ${socket.id}`);
    });
  });

  console.log("Socket.IO configuré avec succès");
};

export default configureSocket;
