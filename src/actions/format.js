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
//change MM to actual month name (used in formateDate)
const getMonthName = (data) => {
  let date = new Date(data);
  return monthNames[date.getMonth()];
};
//makes the date Month Day (ex. January 1)
const formatDate = (data) => {
  const monthName = getMonthName(data);
  const [year, month, day] = data.split("-");
  return [monthName, day].join(" ");
};

//makes the date MM/DD/YYYY (ex. 01/01/2022)
const formatDate2 = (data) => {
  const [year, month, day] = data.split("-");
  return [month, day, year].join("/");
};

//from HH:MM:SS to HH:MM (ex. 6:00 PM)
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

const formatComments = (data) => {
  let commentsJSON = [];
  for (const comment of data) {
    if (comment !== "[]") {
      let commentJSON = JSON.parse(comment);
      commentsJSON.push(commentJSON);
    }
  }
  return commentsJSON;
};

const formatCommentDate = (data) => {
  let date = data.slice(4, 15);
  let time = data.slice(16, 24);
  time = formatTime(time);
  let formatted = date + " " + time;
  return formatted;
};

const formatSupplies = (data) => {
  let suppliesJSON = [];
  for (const item of data) {
    if (item !== "[]") {
      let itemJSON = JSON.parse(item);
      suppliesJSON.push(itemJSON);
    }
  }
  return suppliesJSON;
};

const formatGuests = (guestList) => {
  let guestsJSON = [];
  if (Array.isArray(guestList)) {
    for (const person of guestList) {
      let guestdata = JSON.parse(person);
      guestsJSON.push(guestdata);
    }
    return guestsJSON;
  } else {
    guestsJSON = JSON.parse(guestList);
    return guestsJSON;
  }
};

export {
  formatDate,
  formatDate2,
  formatTime,
  formatComments,
  formatCommentDate,
  formatSupplies,
  formatGuests,
};
