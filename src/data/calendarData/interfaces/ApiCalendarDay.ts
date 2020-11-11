export interface ApiCalendarDay {
  date: string;
  season: {
    name: string;
    colors: string[];
  };
  commemorations: {
    name: string;
    rank: {
      name: string;
      formatted_name: string;
      precedence: number;
    };
    colors: string[];
    links: string[];
    collects: {
      collect: string;
      alternate_collect?: string;
      vigil_collect?: string;
    };
  }[];
}
