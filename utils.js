export const parseDate = (dateStr) => {
  let [year, , dayOfMonth] = dateStr
    .split("-")
    .map((stringWithLeadingZero) => String(+stringWithLeadingZero));
  const month = new Date(dateStr).toUTCString().slice(8, 11);
  return { year, month, dayOfMonth };
};
