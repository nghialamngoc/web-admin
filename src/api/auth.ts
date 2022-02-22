import { setToken } from "helpers/auth";
import { API_LOGIN, API } from "../constants/endpoints";
import axios from "../services/axios";

/**
 * Get current profile
 */
export const login = async (request:any) => {
  try {
    const data: any = await axios.post(API.AUTH.LOGIN || "", request);

    setToken(data.token);

    return Promise.resolve(data);
    
  } catch (err) {
    return Promise.reject(err);
  }
};
