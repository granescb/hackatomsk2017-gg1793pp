import React, { Component, PropTypes } from 'react';
import block from 'bem-cn';
import { bind } from 'decko'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions as rouletteActions } from 'modules/shared/RouletteWrapper';

import Timer from 'features/timer';
import Button from 'shared/view/components/Button';
import './DuelLayout.styl';

class DuelLayout extends Component {
  static propTypes = {
    activeRoom: PropTypes.number.isRequired,

    addUserName: PropTypes.func.isRequired,
  }

  @bind
  onClickStart() {
    console.log('start');
    this.props.addUserName();
  }
  render() {
    const b = block('duel-layout');
    return (
      <div className={b()}>
        <div className={b('timer-container')}>
          <Timer />
          <div className={b('button')}>
            <Button onClick={() => this.onClickStart()}>Старт</Button>
          </div>
        </div>
      </div>
    );
  }

 
}

function mapStateToProps(state) {
  return {
    activeRoom: state.rooms.activeRoom,
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    addUserName: rouletteActions.addUserName,
  };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DuelLayout);
