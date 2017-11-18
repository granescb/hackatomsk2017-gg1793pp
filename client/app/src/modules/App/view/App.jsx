import React, { Component, PropTypes } from 'react';
import block from 'bem-cn';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'react-modal';

import { actions as authActions } from 'features/auth/redux';

import AppComponent from './AppComponent/AppComponent';
import LoginTab from 'features/auth/view/AuthModal/LoginTab';
import './App.styl';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(19,19,19,0.75)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#323b48',
    minWidth: '250px',
  },
};

class App extends Component {

  static propTypes = {
    isUserAuthenticated: PropTypes.bool.isRequired,
    authProcessing: PropTypes.bool.isRequired,

    signIn: PropTypes.func.isRequired,

    children: PropTypes.element.isRequired,
  }
  render() {
    const b = block('app');
    const bLoginTab = block('auth-modal');
    const { isUserAuthenticated, signIn, authProcessing } = this.props;
    return (
      <div className={b}>
        { 
            //isUserAuthenticated
            true
            ?
              <AppComponent>
                {this.props.children}
              </AppComponent>
            :
              <Modal
                isOpen
                contentLabel="Авторизация"
                style={customStyles}
              >
                <LoginTab
                  b={bLoginTab}
                  signIn={signIn}
                  signInProcessing={authProcessing}
                />
              </Modal>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isUserAuthenticated: state.auth.isAuthenticated,
    authProcessing: state.auth.actionProcessing,
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    signIn: authActions.signIn,
  };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
