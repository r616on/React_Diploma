import { categoriesActions } from "./CategoriesSlice";
import { searchActions } from "./SearchSlice";
import qs from "qs";

export const updateFromQs = (location) => (dispatch) => {
  if (location) {
    let qsParams = qs.parse(location.search, { ignoreQueryPrefix: true });
    if (qsParams.categoryId) {
      dispatch(categoriesActions.setActivCategory(+qsParams.categoryId));
    } else {
      dispatch(categoriesActions.setActivCategory("all"));
    }
    if (qsParams.q) {
      dispatch(
        searchActions.changeFormValue({ fild: "name", value: qsParams.q })
      );
    } else {
      dispatch(searchActions.initForm());
    }
    // if (qsParams.offset) {
    //   dispatch(catalogActions.setOffset(+qsParams.offset));
    // }
  }
};
