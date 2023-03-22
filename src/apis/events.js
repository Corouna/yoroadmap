import axios from "axios";
import config from "./config";

const api = axios.create({
  baseURL: config.baseURL,
});

export const getEvents = () => {
  return api.get(config.endpoints.events);
};

export const getEvent = (id) => {
  return api.get(`${config.endpoints.events}/${id}`);
};

export const createEvent = (data) => {
  return api.post(config.endpoints.events, data);
};

export const updateEvent = (id, data) => {
  return api.put(`${config.endpoints.events}/${id}`, data);
};

export const deleteEvent = (id) => {
  return api.delete(`${config.endpoints.events}/${id}`);
};
