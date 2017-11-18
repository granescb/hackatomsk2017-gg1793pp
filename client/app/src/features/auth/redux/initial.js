

import authModalTabs from './data/authModalTypes'; 

const initialState = {
  actionProcessing: false,
  actionSuccess: false,
  balance: null,
  userName: null,
  errorMessage: null,
  isAuthenticated: false,
  activeAuthModalTab: authModalTabs.TAB_SIGN_IN,
};

export default initialState;
