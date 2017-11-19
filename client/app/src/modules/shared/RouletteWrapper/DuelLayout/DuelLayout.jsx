import React, { Component, PropTypes } from 'react';
import block from 'bem-cn';
import { bind } from 'decko';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import asyncPoll from 'react-async-poll';

import { actions as rouletteActions } from 'modules/shared/RouletteWrapper';

import Timer from 'features/timer';
import Bet from 'features/bet';
import UserInfo from 'shared/view/components/UserInfo';
import ListUsers from 'features/listUsers';
import Button from 'shared/view/components/Button';
import './DuelLayout.styl';

class DuelLayout extends Component {
  static propTypes = {
    addUserRoom: PropTypes.func.isRequired,
    startPolling: PropTypes.func.isRequired,
    pullingStatusRoom: PropTypes.func.isRequired,
    currentEmail: PropTypes.string.isRequired,
    userList: PropTypes.shape({
      key: PropTypes.string,
    }).isRequired,
    userBets: PropTypes.arrayOf([
      PropTypes.shape({
        amount: PropTypes.string,
      }),
      PropTypes.shape({
        userLogin: PropTypes.string,
      })],
    ).isRequired,
    isOpenRoom: PropTypes.bool.isRequired,
  }

  @bind
  onClickStart() {
    const { addUserRoom } = this.props;
    addUserRoom().then(() => {
      this.props.startPolling();
    });
  }

  @bind
  getInfo() {
    const { userBets, currentEmail } = this.props;
    
    if (userBets.length === 0) return null;
    
    const resultInfo = {
      deposit: this._getDeposit(userBets, currentEmail),
      bank: this._getBank(userBets),
    };
    return resultInfo;
  }

  @bind
  _getDeposit(userBets, email) {
    let resulDeposit = null;
    userBets.forEach((user) => {
      if (user.userLogin === email) resulDeposit = user.amount;
    });
    return resulDeposit;
  }

  @bind
  _getBank(userBets) {
    let resulBank = null;
    userBets.forEach((user) => {
      resulBank = resulBank + user.amount;
    });
    return resulBank;
  }

  render() {
    const b = block('duel-layout');
    const { isOpenRoom } = this.props;
    const info = this.getInfo();
    return (
      <div className={b()}>
        <div className={b('start-panel')}>
          <div className={b('timer-container')}>
            <div className={b('button')}>
              <Button disabled={isOpenRoom} onClick={() => this.onClickStart()}>Старт</Button>
            </div>
          </div>
          <div className={b('message-container')}>
            { isOpenRoom ? <p>Время идет!Пора делать ставку</p> : <p>Старт и делаем ставки!</p> }
          </div>
        </div>
        <div className={b('bet-panel')}>
          <div className={b('bet-panel', { position: 'left' })}>
            <ListUsers />
          </div>
          <div className={b('bet-panel', { position: 'right' })}>
            <Bet />
          </div>
        </div>
        <div className={b('user-info-panel')}>
          <UserInfo 
            bank={info ? info.bank : ''}
            chance={info ? info.chance : ''}
            deposit={info ? info.deposit : ''}
          />
        </div>
      </div>
    );
  }

 
}

function mapStateToProps(state) {
  return {
    activeRoom: state.rooms.activeRoom,
    userList: state.roulette.userList,
    userBets: state.roulette.userBets,
    isOpenRoom: state.roulette.isOpenRoom,
    currentEmail: state.auth.userName,
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

