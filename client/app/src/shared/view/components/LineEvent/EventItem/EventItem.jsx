import React, { PropTypes } from 'react';
import block from 'bem-cn';

import photoImg from '../img/businessman.png';
import './EventItem.styl';

class EventItem extends React.Component {

  static propTypes = {
    amount: PropTypes.number.isRequired,
    deposit: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bank: PropTypes.number.isRequired,
  }

  render() {
    const b = block('event-item');

    const { amount, deposit, name, bank } = this.props;
    const chance = (deposit / bank) * 100;

    return (
      <div className={b}>
        <div className={b('name-container')}>
          <img src={photoImg} alt="" />
          <span className={b('name')}>{name}</span>
        </div>
        <div className={b('chance-container')}>
          <span>Текущий шанс</span>
          <span>{chance ? chance.toFixed(1) + '%' : ''}</span>
        </div>
        <div className={b('amount-container')}>
          {amount}
        </div>
      </div>
    );
  }
}

export default EventItem;
