import { jwtDecode } from "jwt-decode";

export const isValidToken = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded.exp * 1000 > Date.now();
  } catch (error) {
    console.log(error);
    return;
  }
};
