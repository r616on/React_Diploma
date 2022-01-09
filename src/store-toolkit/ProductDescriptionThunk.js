import { productDescriptionActions } from "./ProductDescriptionSlice";

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

export const fetchItemProduct = (id) => (dispatch, getState) => {
  const url = getState().productDescription.url;
  dispatch(productDescriptionActions.initProduct());
  dispatch(productDescriptionActions.setRequestStatus(requestStatuses.loading));
  fetch(`${url}/api/items/${id}`)
    .then((response) => {
      if (response.status > 300) {
        console.log("error" + response.status);
      }
      return response.json();
    })
    .then((item) => {
      dispatch(productDescriptionActions.setRequestStatus(requestStatuses.ok));
      dispatch(productDescriptionActions.setItem(item));
    })
    .catch(() => {
      dispatch(
        productDescriptionActions.setRequestStatus(requestStatuses.setError)
      );
      setTimeout(() => {
        dispatch(fetchItemProduct(id));
      }, 3000);
    });
};
