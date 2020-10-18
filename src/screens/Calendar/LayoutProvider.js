import { GridLayoutProvider } from "recyclerlistview";

const MAX_SPAN = 1;

export default class LayoutProvider extends GridLayoutProvider {
  constructor(props) {
    super(
      MAX_SPAN,
      (index) => {
        return props.getDataForIndex(index).type;
      },
      (index) => {
        return 1;
      },
      (index) => {
        const { type } = props.getDataForIndex(index);
        switch (type) {
          case "heading":
            return 42.5;
          case "date":
            return 300;
        }
      }
    );
  }
}
