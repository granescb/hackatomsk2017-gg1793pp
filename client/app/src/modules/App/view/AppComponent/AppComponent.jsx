import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import block from 'bem-cn';
import { bind } from 'decko';

import { actions as authActions } from 'features/auth/redux';

import Header from 'shared/view/components/Header';
import Rooms from 'features/rooms';
import './AppComponent.styl';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMenu: false,
      authExtraParams: {},
    };
  }

  static propTypes = {
    children: PropTypes.element.isRequired,
    logout: PropTypes.func.isRequired,
  }

  static contextTypes = {
    router: PropTypes.object,
  }

  static defaultProps = {
    userBalance: null,
  }

  render() {
    const b = block('app-component');
    const { children, logout } = this.props;
    return (
      <div className={b}>
        <Header logout={logout} />
        <div className={b('content')}>
          <div className={b('content', { position: 'left-block' })}>
            <Rooms />
          </div>
          <div className={b('content', { position: 'center-block' })} >
            <div className={b('center-content-wrapper')}>
              {children}
            </div>
          </div>
          <div className={b('content', { position: 'right-block' })} >
            линия событий
          </div>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    logout: authActions.logout,
  };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);

