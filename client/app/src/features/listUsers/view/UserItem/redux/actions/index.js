const actionTypes = {
  ACTION_PROCESSING: 'haka/room/ACTION_PROCESSING',
  ACTION_FAILURE: 'haka/room/ACTION_FAILURE',
  MAKE_BET: 'haka/room/MAKE_BET',
};

function makeBet(amount) {
  return async (dispatch, getState, extra) => {
    dispatch({ type: actionTypes.ACTION_PROCESSING });
    const { api } = extra;
    const response = await api.bet.makeBet(amount);
    if (response.success) dispatch({ type: actionTypes.MAKE_BET, payload: response.data });
    else dispatch({ type: actionTypes.ACTION_FAILURE, payload: response.errorMessage });
  };
}

export {
  actionTypes,
  makeBet,
};
