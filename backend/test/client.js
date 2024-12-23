import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

// Tester la connexion
socket.on("connect", () => {
  console.log("Connecté au serveur, ID :", socket.id);

  // Créer une salle
  socket.emit("createRoom", "Room1");

  // Rejoindre une salle
  socket.emit("joinRoom", "Room1");

  // Lancer un quiz
  const questions = [
    {
      question: "Quelle est la capitale de la France ?",
      options: ["Paris", "Londres", "Berlin"],
      correctAnswer: "Paris",
    },
  ];
  socket.emit("startQuiz", { roomName: "Room1", questions });

  // Envoyer une réponse
  socket.emit("submitAnswer", {
    roomName: "Room1",
    playerId: socket.id,
    score: 10,
  });
});

// Recevoir les événements du serveur
socket.on("roomCreated", (data) => console.log("Salle créée :", data));
socket.on("roomJoined", (data) => console.log("Rejoint :", data));
socket.on("quizStarted", (questions) =>
  console.log("Quiz démarré :", questions)
);
socket.on("updateScores", (data) => console.log("Scores mis à jour :", data));
socket.on("roomError", (error) => console.log("Erreur :", error));

socket.on("disconnect", () => console.log("Déconnecté du serveur."));
