import React, { Component, PropTypes } from 'react';
import block from 'bem-cn';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from 'features/roulette/redux';

import './Roulette.styl';

class Roulette extends Component {

  render() {
    const b = block('roulette');

    return (
      <div className={b}>
        roulete
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Roulette);
