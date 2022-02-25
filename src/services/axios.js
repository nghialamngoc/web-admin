import axios from "axios";
import startsWith from "lodash/startsWith";
import { getToken } from "helpers/auth";

// Create new axios instance
const instance = axios.create();

// Add a request interceptor
instance.interceptors.request.use((config) => {

  const DOMAIN = "https://thy.tvtsolutions.com";
  
  if (config.url && config.url.indexOf('http') === -1) {
    config.url = `${DOMAIN}${config.url}`;
}

 /* // Mocking test json api
  if (startsWith(config.url, "/static/api/")) {
    // Set prefix for api request
    // config.baseURL = process.env.BASE_API;
    config.baseURL = "https://thy.tvtsolutions.com";
    // Change body data to query params
    if (config.data && typeof config.data === "object") {
      config.params = { ...config.params, ...config.data };
    }
    // Change method to get
    config.method = "GET";
  }*/

  // Token
  const token = getToken();
  if (token && !config.anonymous) {
    config.headers["Authorization"] = "Bearer " + token;
  }

  return config;
});

// Add a response interceptor
instance.interceptors.response.use(
  async (response) => {
    const { data, config } = response;

    // Extract data
    return config.raw ? response : data;
  },
  async (error) => {
    const { response } = error;

    // 401 case
    if (response && response.status === 401) {
      //
    }

    // 503 case
    if (response && response.status === 503) {
      //
    }

    return Promise.reject(error);
  }
);

export default instance;
