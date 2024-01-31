import axios from "axios";

// Create a new Axios instance with a base URL
const API = axios.create({
  baseURL: "https://soulclub-niftyzone.vercel.app/api/v1", // Your base URL here
  // baseURL: "http://localhost:5000/api/v1", // Your base URL here

  withCredentials: true,
});

export default API;
