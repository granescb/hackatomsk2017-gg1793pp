const actionTypes = {
  ACTION_PROCESSING: 'haka/listUsers/ACTION_PROCESSING',
  ACTION_FAILURE: 'haka/listUsers/ACTION_FAILURE',
  LOAD_USERS_ROOM: 'haka/listUsers/LOAD_USERS_ROOM',
};

function getUsersRoom(amount) {
  return async (dispatch, getState, extra) => {
    dispatch({ type: actionTypes.ACTION_PROCESSING });
    const { api } = extra;
    const response = await api.bet.getUsersRoom(amount);
    if (response.success) dispatch({ type: actionTypes.LOAD_USERS_ROOM, payload: response.data });
    else dispatch({ type: actionTypes.ACTION_FAILURE, payload: response.errorMessage });
  };
}

export {
  actionTypes,
  getUsersRoom,
};
