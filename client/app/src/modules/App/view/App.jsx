import React, { Component, PropTypes } from 'react';
import block from 'bem-cn';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bind } from 'decko';

import './App.styl';

class App extends Component {

  render() {
    const b = block('app');
    return (
      <div className={b}>
        app
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
