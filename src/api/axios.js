import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://main--radiant-brigadeiros-f8e731.netlify.app/api/",
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
