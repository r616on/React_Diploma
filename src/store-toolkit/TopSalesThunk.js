import { topSalesActons } from "./TopSalesSlice";
import requestStatuses from "./requestStatuses";

export const fetchItemsTopSales = () => (dispatch, getState) => {
  const url = getState().TopSales.url;
  dispatch(topSalesActons.setRequestStatus(requestStatuses.loading));
  fetch(`${url}/api/top-sales`)
    .then((response) => {
      if (response.status > 300) {
        console.log("error" + response.status);
      }
      return response.json();
    })
    .then((items) => {
      dispatch(topSalesActons.setItems(items));

      dispatch(topSalesActons.setRequestStatus(requestStatuses.ok));
    })
    .catch(() => {
      dispatch(topSalesActons.setRequestStatus(requestStatuses.setError));
      setTimeout(() => {
        dispatch(fetchItemsTopSales());
      }, 3000);
    });
};
