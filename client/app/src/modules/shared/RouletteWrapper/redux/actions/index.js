const actionTypes = {
  ACTION_PROCESSING: 'haka/play/ACTION_PROCESSING',
  ACTION_FAILURE: 'haka/play/ACTION_FAILURE',
  ADD_USER_ROOM: 'haka/paly/ADD_USER_ROOM',
  PULLING_STATUS_ROOM: 'haka/paly/PULLING_STATUS_ROOM',
  
};

function addUserRoom() {
  return async (dispatch, getState, extra) => {
    dispatch({ type: actionTypes.ACTION_PROCESSING });
    const { api } = extra;
    const response = await api.roulette.addUserRoom();
    if (response.success) dispatch({ type: actionTypes.ADD_USER_ROOM });
    else dispatch({ type: actionTypes.ACTION_FAILURE, payload: response.errorMessage });
  };
}

function pullingStatusRoom() {
  return async (dispatch, getState, extra) => {
    const { api } = extra;
    const response = await api.roulette.pullingStatusRoom();
    if (response.success) dispatch({ type: actionTypes.PULLING_STATUS_ROOM, payloaf: response.data });
    else dispatch({ type: actionTypes.ACTION_FAILURE, payload: response.errorMessage });
  };
}


export {
  actionTypes,
  addUserRoom,
  pullingStatusRoom,
};
