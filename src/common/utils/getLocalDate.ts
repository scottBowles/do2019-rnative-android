/**
 * Converts a UTCDate (as from the build-in parser) to a Date in the local time
 * @param utcDate Date object from normal string parsing
 */
export const getLocalDate = (utcDate: Date): Date => {
  const time = utcDate.getTime() + utcDate.getTimezoneOffset() * 60 * 1000;
  return new Date(time);
};
