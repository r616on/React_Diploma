import { catalogActions } from "./CatalogSlice";
import { searchActions } from "./SearchSlice";

export const searchCatalogFetch =
  (header, navigate) => (dispatch, getState) => {
    const { url } = getState().CatalogSlice;
    const { activCategory } = getState().categoriesSlice;
    if (header) {
      dispatch(searchActions.setSearchHeader(false));
      navigate("/catalog");
    }

    const name = getState().search.form.name;
    const params = new URLSearchParams({ q: name });
    dispatch(catalogActions.setError(false));
    dispatch(catalogActions.setLoading("loading"));
    fetch(
      activCategory === "all"
        ? `${url}/api/items?${params}`
        : `${url}/api/items?categoryId=${activCategory}&${params}`
    )
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
      });
  };
