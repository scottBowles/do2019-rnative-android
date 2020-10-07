const parseDate = (dateStr) => {
  const date = new Date(dateStr);
  if (!date) return { error: "Invalid date provided" };

  const weekdayIndex = date.getUTCDay();
  const monthIndex = date.getUTCMonth();
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
    weekdayIndex
  ];
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
  const dayOfMonth = date.getUTCDate();
  const month = fullMonth.slice(0, 3);
  const year = date.getUTCFullYear();

  return { dayOfMonth, fullMonth, month, weekday, year };
};

export default parseDate;
