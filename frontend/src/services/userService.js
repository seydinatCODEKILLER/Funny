import axios from "axios";
const API_URL = "http://localhost:3000/api/users";

export const fetchUser = async (token) => {
  const response = await axios.get(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.userCurrent;
};
