import axios from "axios";

const apiClient = axios.create({
//   baseURL: 'https://dulit-server.onrender.com/', // Change this to your API's base URL
  baseURL: 'http://localhost:3000', // Change this to your API's base URL
});

export const getSpeakers = async () => {
  const { data } = await apiClient.get("/speakers");
  return data;
};

export const getProgrammes = async () => {
  const { data } = await apiClient.get("/programmes");
  return data;
};
