import { productDescriptionActions } from "./ProductDescriptionSlice";

export const fetchItemProduct = (id) => (dispatch, getState) => {
  const url = getState().productDescription.url;
  // dispatch(setError(false));
  dispatch(productDescriptionActions.setLoading("loading"));

  fetch(`${url}/api/items/${id}`)
    .then((response) => {
      if (response.status > 300) {
        console.log("error" + response.status);
      }
      return response.json();
    })
    .then((item) => {
      dispatch(productDescriptionActions.initProduct());
      dispatch(productDescriptionActions.setItem(item));
      dispatch(productDescriptionActions.setLoading("idel"));
    })
    .catch(() => {
      dispatch(productDescriptionActions.setLoading("idel"));
      // dispatch(setError(true));
    });
};
