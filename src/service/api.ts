import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 5000,
  headers: {
    "Content-Type": "aplicattion/json",
  },
});

export default api;
