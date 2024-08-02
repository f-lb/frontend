import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://43.201.49.70:8080/api",
  withCredentials: true,
});

export default axiosInstance;
