export const parseDate = (dateStr) => {
  const date = new Date(dateStr);
  if (!date) return "Invalid date provided";

  const weekdayIndex = date.getUTCDay();
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
    weekdayIndex
  ];
  const dayOfMonth = date.getUTCDate();
  const month = date.toUTCString().slice(8, 11);
  const year = date.getUTCFullYear();

  return { weekday, dayOfMonth, month, year };
};
