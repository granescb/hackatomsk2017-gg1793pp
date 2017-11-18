const actionTypes = {
  ACTION_PROCESSING: 'haka/payment/ACTION_PROCESSING',
  ACTION_FAILURE: 'haka/payment/ACTION_FAILURE',
  INIT_BITAPS_PAYMENT_SUCCESS: 'haka/payment/INIT_BITAPS_PAYMENT_SUCCESS',
  INIT_CANDY_WRAPPERS_SUCCESS: 'haka/payment/INIT_CANDY_WRAPPERS_SUCCESS',
};

function initBitapsPayment(methodID, amount) {
  return async (dispatch, getState, extra) => {
    dispatch({ type: actionTypes.ACTION_PROCESSING });
    const { api } = extra;
    const response = await api.payment.initBitapsPayment(methodID, amount);
    if (response.success) {
      dispatch({ type: actionTypes.INIT_BITAPS_PAYMENT_SUCCESS });
    } else { 
      dispatch({ type: actionTypes.ACTION_FAILURE, 
        payload: response.errorMessage }); 
    }
  };
}

function initCandyWrapper(methodID, amount) {
  return async (dispatch, getState, extra) => {
    dispatch({ type: actionTypes.ACTION_PROCESSING });
    const { api } = extra;
    const response = await api.payment.initCandyWrapper(methodID, amount);
    if (response.success) {
      dispatch({ type: actionTypes.INIT_CANDY_WRAPPERS_SUCCESSS });
    } else dispatch({ type: actionTypes.ACTION_FAILURE, payload: response.errorMessage });
  };
}

export {
  actionTypes,
  initBitapsPayment,
  initCandyWrapper,
};
