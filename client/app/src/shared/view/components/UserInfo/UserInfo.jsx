import React, { PropTypes } from 'react';
import block from 'bem-cn';

import './UserInfo.styl';

class UserInfo extends React.Component {

  static propTypes = {
    bank: PropTypes.number.isRequired,
    deposit: PropTypes.string.isRequired,
  }

  render() {
    const b = block('user-info');

    const { bank, deposit } = this.props;
    const chance = (deposit / bank) * 100;
    return (
      <div className={b}>
        <div className={b('wrapper', { position: 'left' })}>
          <div className={b('article')}>Ваш вклад</div>
          <div>{deposit}</div>
        </div>
        <div className={b('wrapper', { position: 'center' })}>
          <div className={b('article')}>Ваш шанс</div>
          <div>{chance ? chance.toFixed(1) + '%' : ''}</div>
        </div>
        <div className={b('wrapper', { position: 'right' })}>
          <div className={b('article')}>Общий банк</div>
          <div>{bank}</div>
        </div>
      </div>
    );
  }
}

export default UserInfo;
