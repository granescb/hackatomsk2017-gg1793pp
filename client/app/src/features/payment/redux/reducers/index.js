import { fromJS } from 'immutable';
import { actionTypes } from '../actions';
import initialState from '../data/initial';

function reducer(state = initialState, action) {
  const imState = fromJS(state);

  switch (action.type) {
    case actionTypes.ACTION_PROCESSING:
      return imState
        .setIn(['actionProcessing'], true)
        .setIn(['createWithdrawalSuccess'], false)
        .setIn(['errorMessage'], null)
        .setIn(['candyWrapperInitSuccess'], false)
        .toJS();

    case actionTypes.ACTION_FAILURE:
      return imState
        .setIn(['actionProcessing'], false)
        .setIn(['errorMessage'], action.payload)
        .toJS();

    case actionTypes.CREATE_WITHDRAWAL_SUCCESS:
      return imState
        .setIn(['actionProcessing'], false)
        .setIn(['createWithdrawalSuccess'], true)
        .toJS();

    case actionTypes.INIT_BITAPS_PAYMENT_SUCCESS:
      return imState
        .setIn(['actionProcessing'], false)
        .setIn(['bitapsInitSuccess'], true)
        .toJS();

    case actionTypes.INIT_CANDY_WRAPPER_PAYMENT_SUCCESS:
      return imState
        .setIn(['actionProcessing'], false)
        .setIn(['candyWrapperInitSuccess'], true)
        .toJS();
        
    default:
      return imState.toJS();
  }
}

export default reducer;