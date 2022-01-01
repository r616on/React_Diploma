import { orderActions } from "./OrderSlice";
import { cartActions } from "./CartSlice";

export const orderFetch = () => (dispatch, getState) => {
  const { form, url } = getState().order;
  const { items } = getState().cart;
  dispatch(orderActions.setSuccess(false));
  dispatch(orderActions.setError(false));
  dispatch(orderActions.setLoading("loading"));

  fetch(`${url}/api/order`, {
    method: "POST",
    body: JSON.stringify({
      owner: {
        phone: form.phone,
        address: form.address,
      },
      items: [...items],
    }),
  })
    .then((resp) => {
      if (resp.status > 200 && resp.status < 300) {
        dispatch(orderActions.setSuccess(true));
        dispatch(orderActions.setLoading("idel"));
        dispatch(cartActions.initCart());
        dispatch(orderActions.initForm());
      }
    })
    .catch(() => {
      dispatch(orderActions.setLoading("idel"));
      dispatch(orderActions.setError(true));
    });
};
