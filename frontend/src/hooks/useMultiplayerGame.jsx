// hooks/useMultiplayerGame.js
import { useState } from "react";
import { createGame, joinGame } from "../services/multiJoueurService";
import useNotificationStore from "../zustand/notifications";

export const useMultiplayerGame = () => {
  const { setMessage } = useNotificationStore((state) => state);

  const [gameCode, setGameCode] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreateGame = async (formData) => {
    setLoading(true);
    try {
      const response = await createGame(formData);
      setGameCode(response.game.code);
      setMessage("Game created successfully");
    } catch (err) {
      setError("Erreur lors de la création de la partie.");
      setMessage(err.response.data.message);
      console.log(err);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleJoinGame = async (code) => {
    setLoading(true);

    try {
      await joinGame(code);
      setMessage("You have joined the game");
    } catch (err) {
      setError("Erreur lors de la tentative de rejoindre la partie.");
      console.log(err);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    gameCode,
    error,
    handleCreateGame,
    handleJoinGame,
  };
};
