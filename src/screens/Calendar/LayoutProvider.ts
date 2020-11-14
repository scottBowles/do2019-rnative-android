import { DataProvider, GridLayoutProvider } from "recyclerlistview";

const MAX_SPAN = 1;

/**
 * LayoutProvider for RecyclerListView
 * See https://github.com/muskeinsingh/recyclerlistview-gridlayoutprovider
 */
export class LayoutProvider extends GridLayoutProvider {
  public type: any;

  constructor(props: DataProvider) {
    super(
      MAX_SPAN,
      (index): number => {
        return props.getDataForIndex(index).type;
      },
      (index) => {
        return 1;
      },
      (index): number => {
        const { type } = props.getDataForIndex(index);
        switch (type) {
          case "listHeader":
            return 153;
          case "heading":
            return 42.5;
          case "date":
            return 300;
        }
      }
    );
  }
}
