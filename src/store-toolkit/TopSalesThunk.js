import { topSalesActons } from "./TopSalesSlice";

export const fetchItemsTopSales = () => (dispatch, getState) => {
  const url = getState().TopSales.url;
  dispatch(topSalesActons.setError(false));
  dispatch(topSalesActons.setLoading("loading"));
  fetch(`${url}/api/top-sales`)
    .then((response) => {
      if (response.status > 300) {
        console.log("error" + response.status);
      }
      return response.json();
    })
    .then((items) => {
      dispatch(topSalesActons.setItems(items));
      dispatch(topSalesActons.setLoading("idel"));
    })
    .catch(() => {
      dispatch(topSalesActons.setLoading("idel"));
      dispatch(topSalesActons.setError(true));
      setTimeout(() => {
        dispatch(fetchItemsTopSales());
      }, 3000);
    });
};
