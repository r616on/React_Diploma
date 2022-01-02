import { catalogActions } from "./CatalogSlice";
import qs from "qs";

export const filterCategory = (navigate, location) => (dispatch, getState) => {
  const { url } = getState().CatalogSlice;
  const { activCategory } = getState().categoriesSlice;

  dispatch(catalogActions.setError(false));
  dispatch(catalogActions.setLoading("loading"));
  const name = getState().search.form.name;
  let params = "";
  if (name && activCategory !== "all") {
    params = qs.stringify({ categoryId: activCategory, q: name });
  } else if (name && activCategory === "all") {
    params = qs.stringify({ q: name });
  } else if (!name && activCategory !== "all") {
    params = qs.stringify({ categoryId: activCategory });
  }

  if (location) {
    navigate(`${location.pathname}?${params}`, {
      replace: true,
    });
  }

  fetch(`${url}/api/items?${params}`)
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
      setTimeout(() => {
        dispatch(filterCategory());
      }, 3000);
    });
};

export const offsetCatalogFetch =
  (navigate, location) => (dispatch, getState) => {
    const { url, offset } = getState().CatalogSlice;
    const { activCategory } = getState().categoriesSlice;

    dispatch(catalogActions.setError(false));
    dispatch(catalogActions.setLoading("loading"));

    const name = getState().search.form.name;

    let params = "";
    if (name && activCategory !== "all") {
      params = qs.stringify({ categoryId: activCategory, q: name, offset });
    } else if (!name && activCategory !== "all") {
      params = qs.stringify({ categoryId: activCategory, offset });
    } else if (name && activCategory === "all") {
      params = qs.stringify({ q: name, offset });
    } else if (!name && activCategory === "all") {
      params = qs.stringify({ offset });
    }

    if (location) {
      navigate(`${location.pathname}?${params}`, {
        replace: true,
      });
    }

    fetch(`${url}/api/items?${params}`)
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
          dispatch(catalogActions.setOffsetItems(items));
          dispatch(catalogActions.nextOffset());
        }

        dispatch(catalogActions.setLoading("idel"));
      })
      .catch(() => {
        dispatch(catalogActions.setLoading("idel"));
        dispatch(catalogActions.setError(true));

        setTimeout(() => {
          dispatch(offsetCatalogFetch(navigate, location));
        }, 3000);
      });
  };
