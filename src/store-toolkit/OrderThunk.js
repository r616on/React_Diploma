import { orderActions } from "./OrderSlice";
import { cartActions } from "./CartSlice";
import requestStatuses from "./requestStatuses";

export const orderFetch = () => (dispatch, getState) => {
  const { form, url } = getState().order;
  const { items } = getState().cart;
  dispatch(orderActions.setSuccess(false));

  dispatch(orderActions.setRequestStatus(requestStatuses.loading));

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
        dispatch(orderActions.setRequestStatus(requestStatuses.ok));
        dispatch(cartActions.initCart());
        dispatch(orderActions.initForm());
      }
    })
    .catch(() => {
      dispatch(orderActions.setRequestStatus(requestStatuses.setError));
    });
};
