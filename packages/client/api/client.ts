// src/lib/axios.ts
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // example
  withCredentials: true, // if you use cookies/sessions
});

export default api;