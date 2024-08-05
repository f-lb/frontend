import dayjs from "dayjs";
import axiosInstance from "./axios";

const postDiary = async ({ date, title, content }) => {
  console.log("date in axios:", date);
  const data = await axiosInstance.post("/diaries/save", {
    date: dayjs(date).add(9, "hour"),
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
