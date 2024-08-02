// src/api/summary.js
import axiosInstance from './axios';

const postDiary = async ({ date, title, content }) => {
  const response = await axiosInstance.post('/diaries/save', {
    date,
    title,
    content,
  });

  return response.data;
};

const getDiariesByMonth = async ({ month }) => {
  const response = await axiosInstance.get(`/diaries/monthly/${month}`);
  return response.data;
};

const getDiaryById = async (diaryId) => {
  const response = await axiosInstance.get(`/diaries/${diaryId}`);
  return response.data;
};

export { postDiary, getDiariesByMonth, getDiaryById };

