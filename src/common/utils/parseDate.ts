// Grab dayOfMonth, fullMonth, month (abbr), weekday, & year from a date

export const parseDate = (dateStr) => {
  const date = new Date(dateStr);
  if (!date) return { error: "Invalid date provided" };

  const weekdayIndex = date.getDay();
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
    weekdayIndex
  ];

  const monthIndex = date.getMonth();
  const fullMonth = [
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
  ][monthIndex];

  const dayOfMonth = date.getDate();
  const month = fullMonth.slice(0, 3);
  const year = date.getFullYear();

  return { dayOfMonth, fullMonth, month, weekday, year };
};
