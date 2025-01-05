import axios from "axios";
import { useAuthStore } from "../zustand/store";
const API_URL = "http://localhost:3000/api/users";

export const fetchUser = async (token) => {
  const response = await axios.get(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.userCurrent;
};

export const saveScore = async (gameId, score, result) => {
  const token = useAuthStore.getState().token;
  const response = await axios.post(
    `${API_URL}/save-quiz-score`,
    {
      gameId,
      score,
      result,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const fetchAllUsers = async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
};
