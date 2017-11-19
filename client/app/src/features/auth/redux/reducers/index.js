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

    case actionTypes.SIGN_IN_SUCCESS:
      return imState
          .setIn(['actionProcessing'], false)
          .setIn(['errorMessage'], null)
          .setIn(['isAuthenticated'], true)
          .setIn(['balance'], action.payload.balance)
          .setIn(['userName'], action.payload.login)
          .setIn(['actionSuccess'], true)
          .toJS();

    case actionTypes.SIGN_UP_SUCCESS:
      return imState
          .setIn(['actionProcessing'], false)
          .setIn(['errorMessage'], null)
          .setIn(['isAuthenticated'], true)
          .setIn(['balance'], action.payload.balance)
          .setIn(['userName'], action.payload.login)
          .setIn(['actionSuccess'], true)
          .toJS();
    case actionTypes.SIGN_OUT:
      return imState
          .setIn(['isAuthenticated'], false)
          .setIn(['errorMessage'], null)
          .toJS();
    
    case actionTypes.GET_USER_BALANCE:
      return imState
          .setIn(['balance'], action.payload)
          .toJS();
    case actionTypes.SELECT_AUTH_MODAL_TAB:
      return imState
        .setIn(['activeAuthModalTab'], action.payload)
        .toJS();
    
    default: 
      return imState.toJS();
  }
}

export default reducer;
