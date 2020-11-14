/**
 * Object to be inserted for section headers
 */
export interface SectionData {
  type: "heading";
  sectionType: "both" | "month" | "season";
  month: string;
  year: number;
  season: { name: string; colors: string[] };
}
