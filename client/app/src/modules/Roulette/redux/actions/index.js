const actionTypes = {
  LOAD_TEST_DATA: 'wjfront/sport/LOAD_TEST_DATA',
};

function loadTestData() {
  return (dispatch, getState, { api, hardware }) => {
    dispatch({
      type: actionTypes.LOAD_TEST_DATA,
      payload: 'test',
    });
  };
}

export {
    actionTypes,
    loadTestData,
};
