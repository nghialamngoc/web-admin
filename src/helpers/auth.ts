import Cookies from "js-cookie";

const TOKEN_KEY = "token_key";

/**
 * Remove token
 *
 * @returns {String}
 */
export const removeToken = () => {
  return Cookies.remove(TOKEN_KEY);
};

/**
 * Set token
 *
 * @returns {String}
 */
export const setToken = (token: string) => {
  return Cookies.set(TOKEN_KEY, token);
};

/**
 * Get access token
 *
 * @returns {String}
 */
export const getToken = (remove = false) => {
  const token = Cookies.get(TOKEN_KEY);

  if (remove) {
    removeToken();
  }

  return token;
};
