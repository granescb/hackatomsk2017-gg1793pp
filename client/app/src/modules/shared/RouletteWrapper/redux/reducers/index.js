import { fromJS } from 'immutable';
import initialState from '../initial';
import { actionTypes } from '../actions';

function reducer(state = initialState, action) {
  const imState = fromJS(state);

  switch (action.type) {

    case actionTypes.ACTION_PROCESSING:
      return imState
          .setIn(['actionProcessing'], true)
          .setIn(['errorMessage'], null)
          .setIn(['isOpenRoom'], false)
          .setIn(['userWin'], null)

          .toJS();

    case actionTypes.ACTION_FAILURE:
      return imState
          .setIn(['actionProcessing'], false)
          .setIn(['actionSuccess'], false)
          .setIn(['errorMessage'], action.payload)
          .setIn(['isOpenRoom'], false)
          .toJS();

    case actionTypes.ADD_USER_ROOM:
      return imState
          .setIn(['actionProcessing'], false)
          .setIn(['errorMessage'], null)
          .setIn(['isOpenRoom'], true)
          .toJS();

    case actionTypes.PULLING_STATUS_ROOM:
      return imState
          .setIn(['actionProcessing'], false)
          .setIn(['errorMessage'], null)
          .setIn(['isOpenRoom'], action.payload.isActive)
          .setIn(['userBets'], action.payload.userBets)
          .setIn(['userList'], action.payload.userList)
          .toJS();
    case actionTypes.PLAYER_WIN:
      return imState
          .setIn(['actionProcessing'], false)
          .setIn(['errorMessage'], null)
          .setIn(['userWin'], action.payload)
          .toJS();
    default: 
      return imState.toJS();
  }
}

export default reducer;
