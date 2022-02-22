import axios from "axios";
export const baseURL = "http://192.168.1.43:8000";
const api = axios.create({ baseURL: "http://192.168.1.43:8000/api" });

export default api;
