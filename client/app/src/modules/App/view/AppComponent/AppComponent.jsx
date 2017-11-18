import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import block from 'bem-cn';
import { bind } from 'decko';

import { actions as authActions } from 'features/auth/redux';

import Header from 'shared/view/components/Header';
import Rooms from 'features/rooms';
import Footer from 'shared/view/components/Footer';
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
  }

  static contextTypes = {
    router: PropTypes.object,
  }

  static defaultProps = {
    userBalance: null,
  }

  render() {
    const b = block('app-component');
    const { children } = this.props;
    return (
      <div className={b}>
        <Header />
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
          <Footer />
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
  };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);

