import { isFast } from "common/utils";

export default addIsFastDay = (data) =>
  data.map((day) => {
    day.isFastDay = isFast(day);
    return day;
  });
