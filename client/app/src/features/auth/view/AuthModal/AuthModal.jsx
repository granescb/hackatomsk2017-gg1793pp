import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { bind } from 'decko';
import { connect } from 'react-redux';
import block from 'bem-cn';
import Modal from 'react-modal';
import SVGInline from 'react-svg-inline';

import { actions } from 'features/auth/redux';

import loginGoogle from '../img/google-plus.svg';
import loginVk from '../img/vk.svg';
import loginOk from '../img/odnoklassniki.svg';
import loginFaceBook from '../img/facebook.svg';
import LoginTab from './LoginTab';
import RegTab from './RegTab';
import { authModalTabs } from 'features/auth/redux';
import { Dictionary } from 'features/auth/redux/data/dictionary';
import './AuthModal.styl';

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
    backgroundColor: '#f8f8f8',
    minWidth: '323px',
  },
};


class AuthModal extends React.Component {

  static propTypes = {
    currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
    inputData: PropTypes.shape({
      email: PropTypes.string,
      password: PropTypes.string,
    }).isRequired,
    
    authProcessing: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired,
    authSuccess: PropTypes.bool.isRequired,
    
    activeAuthModalTab: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,

    handleCloseFunc: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
    signUpSocial: PropTypes.func.isRequired,
    onSucessRegistration: PropTypes.func.isRequired,
    onSucessSocialRegistration: PropTypes.func.isRequired,
    selectAuthModalTab: PropTypes.func.isRequired,
    
    extraParams: PropTypes.object.isRequired,
  }

  static contextTypes = {
    router: PropTypes.object,
    errorMessage: null,
  }

  render() {
    const b = block('login-modal');
    const { isOpen, handleCloseFunc, signIn, signUp,
      authProcessing, onSucessRegistration, authSuccess, inputData,
      selectAuthModalTab, activeAuthModalTab, extraParams,
      signUpSocial, onSucessSocialRegistration, lang } = this.props;
    return (
      <div className={b}>
        <Modal
          isOpen={isOpen}
          contentLabel="Авторизация"
          style={customStyles}
          onRequestClose={handleCloseFunc}
        >
          <div className={b}>
            <div className={b('row')}>
              <span
                className={
                  b('tabs', 'text', {
                    active: activeAuthModalTab === authModalTabs.TAB_SIGN_IN,
                  })
                }
                onClick={() => selectAuthModalTab(authModalTabs.TAB_SIGN_IN)}
              >
                Войти
              </span>
              <span
                className={
                  b('tabs', 'text', {
                    active: activeAuthModalTab === authModalTabs.TAB_SIGN_UP,
                  })
                }
                onClick={() => selectAuthModalTab(authModalTabs.TAB_SIGN_UP)}
              >
                Регистрация
              </span>
            </div>
            { activeAuthModalTab === authModalTabs.TAB_SIGN_IN ?
              <LoginTab
                signIn={signIn}
                b={b}
                signInProcessing={authProcessing}
                errorMessage={errorMessage}
                callCloseModal={handleCloseFunc}
                inputData={inputData}
                loginSuccess={authSuccess}
                lang={lang}
              />
              :
              <RegTab 
                signUp={signUp}
                signUpSocial={signUpSocial}
                b={b}
                signUpProcessing={authProcessing}
                errorMessage={errorMessage}
                handleCloseFunc={handleCloseFunc}
                onSucessRegistration={onSucessRegistration}
                onSucessSocialRegistration={onSucessSocialRegistration}
                regSuccess={authSuccess}
                extraParams={extraParams}
                lang={lang}
              />
            }
            {errorMessage && 
              <div className={b('error-block')}>
                {errorMessage}
              </div>
            }
          </div>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeAuthModalTab: state.auth.activeAuthModalTab,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthModal);
