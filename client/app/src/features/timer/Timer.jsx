import React, { Component, PropTypes } from 'react';
import block from 'bem-cn';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from 'features/roulette/redux';

import TimerBlock from './TimerBlock';
import './Timer.styl';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 30,
    };
  }
  render() {
    const b = block('timer');
    const { time } = this.state;
    return (
      <div className={b}>
        <TimerBlock time={time} />
        <button onClick={this.setState({ time: 30 })}>Клик</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
