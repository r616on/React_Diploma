import { topSalesActons } from "./TopSalesSlice";

export const fetchItemsTopSales = () => (dispatch, getState) => {
  const url = getState().TopSales.url;
  // dispatch(setError(false));
  // dispatch(setLoading("loading"));
  fetch(`${url}/api/top-sales`)
    .then((response) => {
      if (response.status > 300) {
        console.log("error" + response.status);
      }
      return response.json();
    })
    .then((items) => {
      dispatch(topSalesActons.setItems(items));
      // dispatch(setLoading("idel"));
    })
    .catch(() => {
      // dispatch(setLoading("idel"));
      // dispatch(setError(true));
    });
};
