import React, { Component, PropTypes } from 'react';
import block from 'bem-cn';
import { bind } from 'decko';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import asyncPoll from 'react-async-poll';

import { actions as rouletteActions } from 'modules/shared/RouletteWrapper';

import Timer from 'features/timer';
import Bet from 'features/bet';
import ListUsers from 'features/listUsers';
import Button from 'shared/view/components/Button';
import './DuelLayout.styl';

class DuelLayout extends Component {
  static propTypes = {
    addUserRoom: PropTypes.func.isRequired,
    startPolling: PropTypes.func.isRequired,
    pullingStatusRoom: PropTypes.func.isRequired,

    isOpenRoom: PropTypes.bool.isRequired,
  }

  @bind
  onClickStart() {
    const { addUserRoom } = this.props;
    addUserRoom().then(() => {
      this.props.startPolling();
    });
  }

  render() {
    const b = block('duel-layout');
    const { isOpenRoom } = this.props;
    return (
      <div className={b()}>
        <div className={b('start-panel')}>
          <div className={b('timer-container')}>
            <div className={b('button')}>
              <Button 
                disabled={isOpenRoom} 
                onClick={() => this.onClickStart()}
                bsStyle="orange">
                  Старт
              </Button>
            </div>
          </div>
          <div className={b('message-container')}>
            { isOpenRoom ? <p>Время идет!Пора делать ставку</p> : <p>Старт и делаем ставки!</p> }
          </div>
        </div>
        <div className={b('bet-panel')}>
          <div className={b('bet-panel', { position: 'left' })}>
            <div className={b('caption')}>
                Участники
            </div>
            <ListUsers />
          </div>
          <div className={b('bet-panel', { position: 'right' })}>
            <Bet />
          </div>
        </div>
      </div>
    );
  }

 
}

function mapStateToProps(state) {
  return {
    activeRoom: state.rooms.activeRoom,

    isOpenRoom: state.roulette.isOpenRoom,
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    addUserRoom: rouletteActions.addUserRoom,
    pullingStatusRoom: rouletteActions.pullingStatusRoom,
  };
  return bindActionCreators(actions, dispatch);
}

function onPullingStatusRoom(props) {
  if (!props.isOpenRoom) props.stopPolling();
  else props.pullingStatusRoom();
}

export default connect(mapStateToProps, mapDispatchToProps)(asyncPoll(2 * 1000, onPullingStatusRoom)(DuelLayout));

