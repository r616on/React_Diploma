import { productDescriptionActions } from "./ProductDescriptionSlice";
import requestStatuses from "./requestStatuses";

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
