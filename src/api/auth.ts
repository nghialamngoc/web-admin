import { setToken } from "helpers/auth";
import { API_LOGIN } from "../constants/endpoints";
import axios from "../services/axios";

/**
 * Get current profile
 */
export const login = async () => {
  try {
    const { token }: any = await axios.get(API_LOGIN || "");

    setToken(token);
  } catch (err) {
    return Promise.reject(err);
  }
};
