const actionTypes = {
  ACTION_PROCESSING: 'wjfront/auth/ACTION_PROCESSING',
  ACTION_FAILURE: 'wjfront/auth/ACTION_FAILURE',
  SIGN_IN_SUCCESS: 'wjfront/auth/SIGN_IN_SUCCESS',
 
};

function signIn(email, password) {
  return async (dispatch, getState, extra) => {
    const { api } = extra;
    console.log(email, password);
    const response = await api.auth.signIn("test", 'test');
    debugger;
  };
}


export {
  actionTypes,
  signIn,
};
