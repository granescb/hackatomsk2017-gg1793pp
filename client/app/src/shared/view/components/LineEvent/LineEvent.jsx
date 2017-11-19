import React, { PropTypes } from 'react';
import block from 'bem-cn';
import { bind } from 'decko';

import EventItem from './EventItem';
import './LineEvent.styl';

class LineEvent extends React.Component {

  static propTypes = {
    bank: PropTypes.number.isRequired,
    deposit: PropTypes.string.isRequired,
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
  }

  @bind
  getInfo(currentEmail) {
    const { userBets } = this.props;
    
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
    const b = block('line-event');

    const { userBets } = this.props;
    let layout = null;
    if (userBets.length > 0) {
      layout = userBets.map((user) => {
        const info = this.getInfo(user.userLogin);
        return (<EventItem 
          amount={user.amount}
          bank={info ? info.bank : ''}
          deposit={info ? info.deposit : ''}
          name={user.userLogin}
        />);
      });
    }
    return (
      <div className={b}>
        {layout}
      </div>
    );
  }
}

export default LineEvent;
