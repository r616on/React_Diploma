import { catalogActions } from "./CatalogSlice";
// import { searchActions } from "./SearchSlice";
import qs from "qs";

export const searchCatalogFetch =
  (navigate, location, catalog) => (dispatch, getState) => {
    const { url } = getState().CatalogSlice;
    const { activCategory } = getState().categoriesSlice;

    const name = getState().search.form.name;

    dispatch(catalogActions.setError(false));
    dispatch(catalogActions.setLoading("loading"));
    let params = "";
    if (name && activCategory !== "all") {
      params = qs.stringify({ categoryId: activCategory, q: name });
    } else if (name && activCategory === "all") {
      params = qs.stringify({ q: name });
    } else if (!name && activCategory !== "all") {
      params = qs.stringify({ categoryId: activCategory });
    }
    if (!catalog) {
      navigate(`/catalog?${params}`);
    } else if (location) {
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
        // dispatch(searchActions.initForm());
        dispatch(catalogActions.setItems(items));

        dispatch(catalogActions.setLoading("idel"));
      })
      .catch(() => {
        dispatch(catalogActions.setLoading("idel"));
        dispatch(catalogActions.setError(true));
        setTimeout(() => {
          dispatch(searchCatalogFetch(navigate, catalog));
        }, 3000);
      });
  };
