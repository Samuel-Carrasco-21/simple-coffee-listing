import axios from "axios";

export const backendInstance = axios.create({
  baseURL: import.meta.env.VITE_API_SIMPLE_COFFEE_LISTING,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
