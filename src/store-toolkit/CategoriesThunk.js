import { categoriesActions } from "./CategoriesSlice";
import { updateFromQs } from "./UpdateFromQs";

export const fetchCategoryItems = (location) => (dispatch, getState) => {
  const url = getState().categoriesSlice.url;
  dispatch(categoriesActions.setError(false));
  dispatch(categoriesActions.setLoading("loading"));
  dispatch(categoriesActions.setCategory([]));
  dispatch(updateFromQs(location));
  fetch(`${url}/api/categories`)
    .then((response) => {
      if (response.status > 300) {
        console.log("error" + response.status);
      }
      return response.json();
    })
    .then((items) => {
      dispatch(categoriesActions.setCategory(items));
      dispatch(categoriesActions.setLoading("idel"));
    })
    .catch(() => {
      dispatch(categoriesActions.setLoading("idel"));
      dispatch(categoriesActions.setError(true));
      setTimeout(() => {
        dispatch(fetchCategoryItems());
      }, 3000);
    });
};
