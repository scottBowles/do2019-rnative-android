import { ISeason } from "data/interfaces";

/**
 * Object to be inserted for section headers
 */
export interface ISectionData {
  type: "heading";
  sectionType: "both" | "month" | "season";
  month: string;
  year: number;
  season: ISeason;
}
