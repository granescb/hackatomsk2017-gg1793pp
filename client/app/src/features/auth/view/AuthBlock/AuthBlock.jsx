import React, { Component, PropTypes } from 'react';
import block from 'bem-cn';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as authActions } from 'features/auth/redux';

import './AuthBlock.styl';
import { UserBlock } from '../UserBlock';

class AuthBlock extends Component {

  static propTypes = {
    userBalance: PropTypes.number,
    extraParams: PropTypes.object.isRequired,
    
    userName: PropTypes.string.isRequired,

    getUserBalance: PropTypes.func.isRequired,

    isUserAuthenticated: PropTypes.bool.isRequired,
  }

  render() {
    const { isUserAuthenticated, userBalance, userName, getUserBalance } = this.props;
    const renderComponent = (
      isUserAuthenticated &&
        <UserBlock 
          userBalance={userBalance}
          userName={userName}
          // signOut={signOut}
          loadUserBalance={getUserBalance}
        />
    );

    return renderComponent;
  }
}

function mapStateToProps(state) {
  return {
    isUserAuthenticated: state.auth.isAuthenticated,
    userName: state.auth.userName,
    userBalance: state.auth.balance,
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    getUserBalance: authActions.getUserBalance,
  };
  return bindActionCreators(actions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthBlock);
