import axiosInstance from "./axios";

const postDiary = async ({ date, title, content }) => {
  const data = await axiosInstance.post("/diaries/save", {
    date,
    title,
    content,
  });

  return data;
};

const getDiariesByMonth = async ({ month }) => {
  const data = await axiosInstance.get(`/diaries/monthly/${month}`);
  return data;
};

export { postDiary, getDiariesByMonth };
