import { MutableRefObject } from "react";
import { getLiturgicalYear } from "common/utils";
import { useHistory } from "react-router-native";

interface Props {
  listRef: MutableRefObject<null>;
  getDateIndex: (date?: Date | undefined) => number;
  getSeasonIndex: (season: string) => number;
}

interface Return {
  jumpToDate: (date: Date) => void;
  jumpToSeason: (season: string) => void;
  jumpToTop: () => void;
}

export const useCalendarActions = ({
  listRef,
  getDateIndex,
  getSeasonIndex,
}: Props): Return => {
  const history = useHistory();

  const jumpToDate = (date: Date): void => {
    /** If date is in current data, scroll to date */
    const index = getDateIndex(date);
    const indexFound = index !== -1;
    if (indexFound) {
      return listRef.current.scrollToIndex(index);
    }
    /**
     * If date is not in current data, route to /calendar/(liturgicalYear)/(dateString)
     * toDateString is used to normalize date. getLocalDate in Calendar ensures no timezone issues.
     */
    const liturgicalYear = getLiturgicalYear(date);
    const dateString = date.toDateString();
    return history.push(`/calendar/${liturgicalYear}/${dateString}`);
  };

  const jumpToSeason = (season: string): void => {
    const index = getSeasonIndex(season);
    const indexFound = index !== -1;
    indexFound && listRef.current.scrollToIndex(index);
  };

  const jumpToTop = (): void => listRef.current.scrollToTop();

  return { jumpToDate, jumpToSeason, jumpToTop };
};
