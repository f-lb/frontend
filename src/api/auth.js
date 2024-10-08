import axiosInstance from "./axios";

const postSignup = async ({ email, password, name }) => {
  const data = await axiosInstance.post("/members/join", {
    email,
    password,
    name,
  });

  return data;
};

const postLogin = async ({ name, email, password }) => {
  const data = await axiosInstance.post("/members/login", {
    name,
    email,
    password,
  });

  return data;
};

export { postSignup, postLogin };
