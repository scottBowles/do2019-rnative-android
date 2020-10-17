import { isFast } from "common/utils";

export const withIsFastDay = (data) =>
  data.map((day) => {
    day.isFastDay = isFast(day);
    return day;
  });
