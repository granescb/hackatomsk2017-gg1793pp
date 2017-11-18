

import typeRoom from 'features/rooms/redux/data/typeRoom.js';

const initialState = {
  actionProcessing: false,
  actionSuccess: false,
  activeRoom: typeRoom.duel.id,
};

export default initialState;
