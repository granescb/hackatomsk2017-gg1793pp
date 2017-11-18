import { START_TIMER } from 'redux-timer-middleware';

function startTimer() {
  return async (dispatch, getState, extra) => {
    dispatch({
      type: START_TIMER,
      payload: {
        actionName: 'SOME_ACTION_TICK',
        timerName: 'infiniteTimer',
        timerPeriod: 10,
      },
    });
  };
}


export {
  startTimer,
};
