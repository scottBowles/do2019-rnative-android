import { parseDate } from "common/utils";

const isFast = ({ date, season, commemorations: [{ rank }] }) => {
  const { weekday } = parseDate(date);

  if (weekday === "Sun") return false;

  if (season.name === "Lent") return true;

  if (rank.name === "EMBER_DAY" || rank.name === "ROGATION_DAY") return true;

  if (season.name === "Eastertide" || season.name === "Christmastide") {
    return false;
  }

  if (weekday === "Fri") return true;

  return false;
};

export default isFast;
