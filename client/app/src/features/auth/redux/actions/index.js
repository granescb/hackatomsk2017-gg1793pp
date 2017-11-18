const actionTypes = {
  ACTION_PROCESSING: 'haka/auth/ACTION_PROCESSING',
  ACTION_FAILURE: 'haka/auth/ACTION_FAILURE',
  SIGN_IN_SUCCESS: 'haka/auth/SIGN_IN_SUCCESS',
  SIGN_UP_SUCCESS: 'haka/auth/SIGN_UP_SUCCESS',
  GET_USER_BALANCE: 'haka/auth/GET_USER_BALANCE',
  SELECT_AUTH_MODAL_TAB: 'haka/auth/SELECT_AUTH_MODAL_TAB',
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

function signUp(email, password) {
  debugger
  return async (dispatch, getState, extra) => {
    dispatch({ type: actionTypes.ACTION_PROCESSING });
    const { api } = extra;
    
    console.log(email, password);
    const response = await api.auth.signUp(email, password);
    if (response.success) dispatch({ type: actionTypes.SIGN_UP_SUCCESS, payload: response.data });
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

function selectAuthModalTab(tab) {
  return { type: actionTypes.SELECT_AUTH_MODAL_TAB, payload: tab };
}


export {
  actionTypes,
  signIn,
  signUp,
  getUserBalance,
  selectAuthModalTab,
};
