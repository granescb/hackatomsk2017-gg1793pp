const actionTypes = {
  ACTION_PROCESSING: 'haka/play/ACTION_PROCESSING',
  ACTION_FAILURE: 'haka/play/ACTION_FAILURE',
  ADD_USER_NAME: 'haka/paly/ADD_USER_NAME',
};

function addUserName() {
  return async (dispatch, getState, extra) => {
    dispatch({ type: actionTypes.ACTION_PROCESSING });
    const { api } = extra;
    const response = await api.roulette.addUserName();
    debugger
    if (response.success) dispatch({ type: actionTypes.ADD_USER_NAME, payload: response.data });
    else dispatch({ type: actionTypes.ACTION_FAILURE, payload: response.errorMessage });
  };
}


export {
  actionTypes,
  addUserName,
};
