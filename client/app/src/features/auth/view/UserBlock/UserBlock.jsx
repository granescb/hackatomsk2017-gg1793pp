import React, { Component, PropTypes } from 'react';
import block from 'bem-cn';
import { bind } from 'decko';

import BalanceBlock from './BalanceBlock';
import './UserBlock.styl';

class UserBlock extends Component {

  static propTypes = {
    userBalance: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,

    signOut: PropTypes.func.isRequired,
    loadUserBalance: PropTypes.func.isRequired,

  }

  static contextTypes = {
    router: PropTypes.object,
  }

  render() {
    const b = block('user-block');
    const { userBalance, loadUserBalance, userName } = this.props;
    return (
      <div className={b}>
        <div className={b('container')}>
          <div className={b('name')}>{userName}</div>

          <BalanceBlock
            balance={userBalance}
            className={b('balance')}
            loadBalance={loadUserBalance}
          />
        </div>
      </div>
    );
  }

  @bind
  onSignOutMenuItemClick(lang) {
    this.props.signOut(lang);
  }
  
}

export default UserBlock;
