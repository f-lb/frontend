import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://43.201.49.70:8080/api",
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    window.location.href = "/signin";
    return config;
  }

  config.headers["Content-Type"] = "application/json";
  config.headers["Authorization"] = `Bearer ${accessToken}`;

  return config;
});

export default axiosInstance;
