import axios from "axios";
import { useAuthStore } from "../zustand/store";
const API_URL = "http://localhost:3000/api/quizz";

export const fetchQuizQuestions = async (category, difficulty, nbQuestions) => {
  try {
    const token = useAuthStore.getState().token;

    const response = await axios.post(
      `${API_URL}/solo`,
      {
        category,
        difficulty,
        nbQuestions,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors du démarrage du quiz:", error);
    throw error;
  }
};
