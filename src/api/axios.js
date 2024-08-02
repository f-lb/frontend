import axios from "axios";

const host =
  window.location.hostname === "localhost"
    ? "http://http://43.201.49.70:8080/api"
    : "api";

const axiosInstance = axios.create({
  baseURL: host,
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");

  // if (!accessToken) {
  //   window.location.href = "/signin";
  //   return config;
  // }

  config.headers["Content-Type"] = "application/json";
  config.headers["Authorization"] = `Bearer ${accessToken}`;

  return config;
});

export default axiosInstance;
