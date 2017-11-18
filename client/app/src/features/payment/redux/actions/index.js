const actionTypes = {
  ACTION_PROCESSING: 'wjfront/payment/ACTION_PROCESSING',
  ACTION_FAILURE: 'wjfront/payment/ACTION_FAILURE',
  INIT_BITAPS_PAYMENT_SUCCESS: 'wjfront/payment/INIT_BITAPS_PAYMENT_SUCCESS',
};

function initBitapsPayment(paymentInfo) {
  return async (dispatch, getState, extra) => {
    dispatch({ type: actionTypes.ACTION_PROCESSING });
    const { api } = extra;
    const response = await api.payment.initBitapsPayment(paymentInfo);
    if (response.success) {
      dispatch({ type: actionTypes.INIT_BITAPS_PAYMENT_SUCCESS });
    } else dispatch({ type: actionTypes.ACTION_FAILURE, payload: response.errorMessage });
  };
}

function initCandyWrapper(paymentInfo) {
  return async (dispatch, getState, extra) => {
    dispatch({ type: actionTypes.ACTION_PROCESSING });
    const { api } = extra;
    const response = await api.payment.initBitapsPayment(paymentInfo);
    if (response.success) {
      dispatch({ type: actionTypes.INIT_BITAPS_PAYMENT_SUCCESS });
    } else dispatch({ type: actionTypes.ACTION_FAILURE, payload: response.errorMessage });
  };
}
