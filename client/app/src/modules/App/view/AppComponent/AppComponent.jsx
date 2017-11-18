import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import block from 'bem-cn';
import { bind } from 'decko';

import { actions as authActions } from 'features/auth/redux';

import './AppComponent.styl';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMenu: false,
      authExtraParams: {},
    };
  }

  static contextTypes = {
    router: PropTypes.object,
  }

  static defaultProps = {
    userBalance: null,
  }

  render() {
    const b = block('app-component');
    return (
      <div className={b}>
        appComponent
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
  };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);

