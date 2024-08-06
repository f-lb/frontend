import axiosInstance from "./axios";

const getReports = async ({ diaryId }) => {
  const data = await axiosInstance.get(`/reports/${diaryId}`);
  return data;
};

export { getReports };
