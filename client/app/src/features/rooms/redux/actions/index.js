const actionTypes = {
  ACTION_PROCESSING: 'haka/room/ACTION_PROCESSING',
  ACTION_FAILURE: 'haka/room/ACTION_FAILURE',
  SET_ACTIVE_ROOM: 'haka/room/SET_ACTIVE_ROOM',
};

function setActiveRoom(id) {
  return { type: actionTypes.SET_ACTIVE_ROOM, payload: id };
}

export {
  actionTypes,
  setActiveRoom,
};
