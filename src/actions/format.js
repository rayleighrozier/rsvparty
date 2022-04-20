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
//change MM to actual month name (used in formateDate2)
const getMonthName = (data) => {
  let date = new Date(data);
  return monthNames[date.getMonth()];
};
//makes the date Month Day (ex.January 1)
const formatDate = (data) => {
  const monthName = getMonthName(data);
  const [year, month, day] = data.split("-");
  return [monthName, day].join(" ");
};
//makes the date MM/DD/YYYY
const formatDate2 = (data) => {
  const [year, month, day] = data.split("-");
  return [month, day, year].join("/");
};

const formatTime = (data) => {
  data = data.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    data,
  ];
  if (data.length > 1) {
    data = data.slice(1);
    data[3] = +data[0] < 12 ? " AM" : " PM";
    data[0] = +data[0] % 12 || 12;
  }
  return data.join("");
};

export { formatDate, formatDate2, formatTime };
