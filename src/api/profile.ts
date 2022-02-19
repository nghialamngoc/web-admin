import { API_PROFILE } from "../constants/endpoints";
import axios from "../services/axios";

/**
 * Get current profile
 */
export const getProfile = async () => {
  try {
    const profile = await axios.get(API_PROFILE || "");

    return profile;
  } catch (err) {
    return Promise.reject(err);
  }
};
