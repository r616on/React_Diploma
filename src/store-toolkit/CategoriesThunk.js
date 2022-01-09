import { categoriesActions } from "./CategoriesSlice";
import { updateFromQs } from "./UpdateFromQs";

const requestStatuses = {
  init: {
    loading: false,
    ok: false,
    error: false,
  },
  loading: {
    loading: true,
    ok: false,
    error: false,
  },
  ok: {
    loading: false,
    ok: true,
    error: false,
  },
  setError: {
    loading: false,
    ok: false,
    error: true,
  },
};

export const fetchCategoryItems = (location) => (dispatch, getState) => {
  const url = getState().categoriesSlice.url;

  dispatch(categoriesActions.setRequestStatus(requestStatuses.loading));

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
      dispatch(categoriesActions.setRequestStatus(requestStatuses.ok));
    })
    .catch(() => {
      dispatch(categoriesActions.setRequestStatus(requestStatuses.setError));
      setTimeout(() => {
        dispatch(fetchCategoryItems());
      }, 3000);
    });
};
