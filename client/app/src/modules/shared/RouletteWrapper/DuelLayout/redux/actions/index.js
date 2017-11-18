const actionTypes = {
  ACTION_PROCESSING: 'haka/auth/ACTION_PROCESSING',
  ACTION_FAILURE: 'haka/auth/ACTION_FAILURE',
  SIGN_IN_SUCCESS: 'haka/auth/SIGN_IN_SUCCESS',
  GET_USER_BALANCE: 'haka/auth/GET_USER_BALANCE',
 
};

function signIn(email, password) {
  return async (dispatch, getState, extra) => {
    dispatch({ type: actionTypes.ACTION_PROCESSING });
    const { api } = extra;
    console.log(email, password);
    const response = await api.auth.signIn(email, password);
    if (response.success) dispatch({ type: actionTypes.SIGN_IN_SUCCESS, payload: response.data });
    else dispatch({ type: actionTypes.ACTION_FAILURE, payload: response.errorMessage });
  };
}

function getUserBalance() {
  return async (dispatch, getState, extra) => {
    const { api } = extra;
    const response = await api.auth.getUserBalance();
    if (response.success) {
      dispatch({
        type: actionTypes.GET_USER_BALANCE,
        payload: response.data.balance,
      });
    }
  };
}


export {
  actionTypes,
  signIn,
  getUserBalance,
};
