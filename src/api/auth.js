import axiosInstance from "./axios";

const postSignup = async ({ email, password, name }) => {
  const { data } = await axiosInstance.post("/auth/signup", {
    email,
    password,
    name,
  });

  return data;
};

const postLogin = async ({ email, password }) => {
  const { data } = await axiosInstance.post("/auth/signin", {
    email,
    password,
  });

  return data;
};

export { postSignup, postLogin };
