import axios from "axios";
const API_URL = "http://localhost:3000/api/quizz";

export const startQuizzSolo = async (data) => {
  const response = await axios.post(`${API_URL}/solo`, data);
  return response.data;
};
