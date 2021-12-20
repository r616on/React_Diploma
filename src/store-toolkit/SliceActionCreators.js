import { setItems, setError, setLoading } from "./TopSalesSlice";
import { actionsCatalogSlice } from "./CatalogSlice";

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
      dispatch(setItems(items));
      // dispatch(setLoading("idel"));
    })
    .catch(() => {
      // dispatch(setLoading("idel"));
      // dispatch(setError(true));
    });
};

export const fetchItemsCatalogCategory = () => (dispatch, getState) => {
  const url = getState().CatalogSlice.url;
  // dispatch(setError(false));
  // dispatch(setLoading("loading"));
  fetch(`${url}/api/categories`)
    .then((response) => {
      if (response.status > 300) {
        console.log("error" + response.status);
      }
      return response.json();
    })
    .then((items) => {
      dispatch(actionsCatalogSlice.setCategory(items));
      // dispatch(setLoading("idel"));
    })
    .catch(() => {
      // dispatch(setLoading("idel"));
      // dispatch(setError(true));
    });
};

// export const fetchDelItemsThunked = (id) => (dispatch, getState) => {
//   const url = getState().listSlice.url;
//   dispatch(setError(false));
//   dispatch(setLoading("loading"));
//   fetch(`${url}/services/:${id}`, { method: "DELETE" })
//     .then((response) => {
//       if (response.status === 204) {
//         dispatch(dellItem(id));
//         dispatch(setLoading("idel"));
//       }
//     })
//     .catch(() => {
//       dispatch(setError(true));
//       dispatch(setLoading("idel"));
//     });
// };

// export const fetchItemFormThunked = (id) => (dispatch, getState) => {
//   const url = getState().listSlice.url;
//   dispatch(setError(false));
//   dispatch(setLoading("loading"));
//   fetch(`${url}/services/${id}`)
//     .then((response) => {
//       return response.json();
//     })
//     .then((item) => {
//       dispatch(setLoading("idel"));
//       dispatch(
//         changeFormInItem({
//           name: item.name,
//           price: item.price,
//           content: item.content,
//         })
//       );
//     })
//     .catch(() => {
//       dispatch(setLoading("idel"));
//       dispatch(setError(true));
//     });
// };

// export const fetchEditItemThunked = (id, navigate) => (dispatch, getState) => {
//   const url = getState().listSlice.url;
//   const form = getState().formSlice.form;
//   dispatch(setLoading("loading"));
//   fetch(`${url}/services/`, {
//     method: "POST",
//     body: JSON.stringify({ ...form, id: +id }),
//   })
//     .then((response) => {
//       if (response.status === 204) {
//         dispatch(setLoading("idel"));
//         navigate("/");
//       }
//     })
//     .catch(() => {
//       dispatch(setLoading("idel"));
//       dispatch(setError(true));
//     });
// };
