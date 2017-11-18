import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import block from 'bem-cn';

import Roulette from 'features/roulette';
import './Layout.styl';

class Layout extends Component {
  static propTypes = {

    addNotification: PropTypes.func.isRequired,
  };

  render() {
    const b = block('roulette-page');
    return (
      <div className={b()}>
        <Roulette />
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
