import axios from "axios";
const API_URL = "http://localhost:3000/api/multiplayerGame";
import { useAuthStore } from "../zustand/store";

export const createGame = async (data) => {
  const token = useAuthStore.getState().token;
  const response = await axios.post(`${API_URL}/create_game`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const joinGame = async (code) => {
  const response = await axios.post(`${API_URL}/create_game`, { code });
  return response.data;
};
