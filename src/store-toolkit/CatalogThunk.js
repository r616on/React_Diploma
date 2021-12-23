import { catalogActions } from "./CatalogSlice";

export const filterCategory = () => (dispatch, getState) => {
  const { url } = getState().CatalogSlice;
  const { activCategory } = getState().categoriesSlice;
  dispatch(catalogActions.setError(false));
  dispatch(catalogActions.setLoading("loading"));
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
      dispatch(catalogActions.setLoading("idel"));
    })
    .catch(() => {
      dispatch(catalogActions.setLoading("idel"));
      dispatch(catalogActions.setError(true));
    });
};

export const offsetCatalogFetch = () => (dispatch, getState) => {
  const { url, offset } = getState().CatalogSlice;
  const { activCategory } = getState().categoriesSlice;

  dispatch(catalogActions.setError(false));
  dispatch(catalogActions.setLoading("loading"));

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

      dispatch(catalogActions.setLoading("idel"));
    })
    .catch(() => {
      dispatch(catalogActions.setLoading("idel"));
      dispatch(catalogActions.setError(true));
    });
};
