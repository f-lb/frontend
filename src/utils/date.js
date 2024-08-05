const getYear = (date) => {
  const year = new Date(date).getFullYear();
  return year;
};
const getMonth = (date) => {
  const month = new Date(date).getMonth() + 1;
  return month;
};
const getDateFn = (date) => {
  console.log(date);
  const day = new Date(date).getDate();
  return day;
};

export { getYear, getMonth, getDateFn };
