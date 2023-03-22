import axios from "axios";
import config from "./config";

const api = axios.create({
  baseURL: config.baseURL,
});

export const login = (data) => {
  return api.post(config.endpoints.login, data);
};
