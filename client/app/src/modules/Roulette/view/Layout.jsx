import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import block from 'bem-cn';

import RouletteWrapper from 'modules/shared/RouletteWrapper';
import './Layout.styl';

class Layout extends Component {

  render() {
    const b = block('roulette-page');
    return (
      <div className={b()}>
        <RouletteWrapper />
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

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
