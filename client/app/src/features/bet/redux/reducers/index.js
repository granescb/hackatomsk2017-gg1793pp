import { fromJS } from 'immutable';
import initialState from '../initial';
import { actionTypes } from '../actions';

function reducer(state = initialState, action) {
  const imState = fromJS(state);

  switch (action.type) {

    case actionTypes.ACTION_PROCESSING:
      return imState
          .setIn(['actionProcessing'], true)
          .setIn(['actionSuccess'], false)
          .setIn(['errorMessage'], null)
          .toJS();

    case actionTypes.ACTION_FAILURE:
      return imState
          .setIn(['actionProcessing'], false)
          .setIn(['actionSuccess'], false)
          .setIn(['errorMessage'], action.payload)
          .toJS();
    
    case actionTypes.MAKE_BET:
      return imState
          .setIn(['activeRoom'], action.payload)
          .toJS();

    default: 
      return imState.toJS();
  }
}

export default reducer;
