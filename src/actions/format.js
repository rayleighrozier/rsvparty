const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
//makes the date MM/DD/YYYY
const formatDate1 = (data) => {
  const [year, month, day] = data.split("-");
  return [month, day, year].join("/");
};

//change MM to actual month name
const getMonthName = (data) => {
  let date = new Date(data);
  return monthNames[date.getMonth()];
};

//makes the date Month Day (ex.January 1)
const formatDate2 = (data) => {
  const monthName = getMonthName(data);
  const [year, month, day] = data.split("-");
  return [monthName, day].join(" ");
};

export { formatDate1, formatDate2 };
