import axios from "axios";

const API = axios.create({
  baseURL: "https://basic-shop.onrender.com/",
  timeout: "20000",
  withCredentials: false,
});

export default API;
