import axios from "axios";
import config from "./config";

const api = axios.create({
  baseURL: config.baseURL,
});

export const registerUser = (data) => {
  return api.post(config.endpoints.register, data);
};
