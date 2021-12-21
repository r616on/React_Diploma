import { catalogActions } from "./CatalogSlice";

export const fetchCategoryItems = () => (dispatch, getState) => {
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
      dispatch(catalogActions.setCategory(items));
      // dispatch(setLoading("idel"));
    })
    .catch(() => {
      // dispatch(setLoading("idel"));
      // dispatch(setError(true));
    });
};
export const filterCategory = () => (dispatch, getState) => {
  const { url, activCategory } = getState().CatalogSlice;
  // dispatch(setError(false));
  // dispatch(setLoading("loading"));
  const name = getState().search.form.name;
  let params = "";
  if (name) {
    params = `&${new URLSearchParams({ q: name })}`;
  }
  fetch(
    activCategory === "all"
      ? `${url}/api/items?${params}`
      : `${url}/api/items?categoryId=${activCategory}${params}`
  )
    .then((response) => {
      if (response.status > 300) {
        console.log("error" + response.status);
      }
      return response.json();
    })
    .then((items) => {
      dispatch(catalogActions.setItems(items));
      // dispatch(setLoading("idel"));
    })
    .catch(() => {
      // dispatch(setLoading("idel"));
      // dispatch(setError(true));
    });
};

export const offsetCatalogFetch = () => (dispatch, getState) => {
  const { url, activCategory, offset } = getState().CatalogSlice;
  // dispatch(setError(false));
  // dispatch(setLoading("loading"));
  const name = getState().search.form.name;
  let params = "";
  if (name) {
    params = `&${new URLSearchParams({ q: name })}`;
  }

  fetch(
    activCategory === "all"
      ? `${url}/api/items?&offset=${offset}${params}`
      : `${url}/api/items?categoryId=${activCategory}&offset=${offset}${params}`
  )
    .then((response) => {
      if (response.status > 300) {
        console.log("error" + response.status);
      }
      return response.json();
    })
    .then((items) => {
      if (items.length < 6) {
        dispatch(catalogActions.setOffsetActive(false));
      }
      if (items.length > 0) {
        dispatch(catalogActions.setItems(items));
        dispatch(catalogActions.nextOffset());
      }

      // dispatch(setLoading("idel"));
    })
    .catch(() => {
      // dispatch(setLoading("idel"));
      // dispatch(setError(true));
    });
};
