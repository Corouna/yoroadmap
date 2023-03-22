import axios from "axios";
import config from "./config";

const api = axios.create({
  baseURL: config.baseURL,
});

const options = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getRoadmaps = () => {
  const token = localStorage.getItem("token");
  return api.get(config.endpoints.roadmaps, options(token));
};

export const getRoadmap = (id) => {
  const token = localStorage.getItem("token");
  return api.get(`${config.endpoints.roadmaps}/${id}`, options(token));
};

export const createRoadmap = (data) => {
  const token = localStorage.getItem("token");
  return api.post(config.endpoints.roadmaps, data, options(token));
};

export const updateRoadmap = (id, data) => {
  return api.put(`${config.endpoints.roadmaps}/${id}`, data);
};

export const deleteRoadmap = (id) => {
  const token = localStorage.getItem("token");
  return api.delete(`${config.endpoints.roadmaps}/${id}`, options(token));
};
