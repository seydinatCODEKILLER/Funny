/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Button, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const JoinGame = () => {
  const [gameCode, setGameCode] = useState("");
  const navigate = useNavigate();

  const handleJoinGame = () => {
    if (gameCode.trim()) {
      // Navigate to the game screen with the entered game code
      navigate(`/game/quiz/multiplayer/game/${gameCode.trim().toUpperCase()}`);
    } else {
      alert("Veuillez entrer un code de jeu valide.");
    }
  };

  return (
    <div className="bg-gradient-to-l from-white via-gray-50 to-gray-100 min-h-screen flex justify-center items-center">
      <div className="flex justify-center items-center min-h-screen relative">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
          <h1 className="text-4xl font-bold text-center text-indigo-800 mb-4">
            Rejoindre une Partie
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Entrez le code de jeu fourni par l'hôte pour rejoindre la partie.
          </p>
          <TextInput
            placeholder="Entrez le code de jeu"
            value={gameCode}
            onChange={(e) => setGameCode(e.target.value)}
            className="mb-6"
          />

          <Button
            color="indigo"
            className="w-full py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
            onClick={handleJoinGame}
            aria-label="Rejoindre une partie"
          >
            Rejoindre la Partie
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JoinGame;
