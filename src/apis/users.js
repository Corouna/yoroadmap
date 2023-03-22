import axios from "axios";
import config from "./config";

const api = axios.create({
  baseURL: config.baseURL,
});

export const getUsers = () => {
  return api.get(config.endpoints.users);
};

export const getUser = (id) => {
  return api.get(`${config.endpoints.users}/${id}`);
};

export const createUser = (data) => {
  return api.post(config.endpoints.users, data);
};

export const updateUser = (id, data) => {
  return api.put(`${config.endpoints.users}/${id}`, data);
};

export const deleteUser = (id) => {
  return api.delete(`${config.endpoints.users}/${id}`);
};
