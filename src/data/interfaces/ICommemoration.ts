export interface ICommemoration {
  name: string;
  rank: { name: string; formatted_name: string; precedence: number };
  colors: string[];
  links: string[];
  collects: {
    collect: string;
    alternate_collect?: string | null;
    vigil_collect?: string | null;
  };
}
