import initialState from '../initial';
import { actionTypes } from '../actions';
import { fromJS } from 'immutable';

function reducer(state = initialState, action) {
  const imState = fromJS(state);

  switch (action.type) {
    case actionTypes.LOAD_TEST_DATA:
      return imState
                .setIn(['testData'], action.payload)
                .toJS();
    default:
      return imState.toJS();
  }
}

export default reducer;
