import React, { PropTypes } from 'react';
import block from 'bem-cn';
import { Link } from 'react-router';

import AuthBlock from 'features/auth';
import logoImg from './img/logo.svg';
import './Header.styl';

class Header extends React.Component {

  static propTypes = {
    extraParams: PropTypes.object.isRequired,
  }

  render() {
    const b = block('header');
    const { extraParams } = this.props;
    return (
      <div className={b}>
        <Link className={b('wrapper', { position: 'left' })} to={'/roulette'}>
          <img src={logoImg} alt="" />
          <p className={b('text')}>Betting-software</p>
        </Link>
        <div className={b('wrapper', { position: 'center' })}></div>
        <div className={b('wrapper', { position: 'right' })}>
          <Link className={b('button')} to={'/top-up'}>
            <div>Пополнить</div>
          </Link>
          <Link className={b('button')} to={'/withdrawal'}>
            <div>Снять</div>
          </Link>
          <AuthBlock 
            extraParams={extraParams}
          />
        </div>
      </div>
    );
  }
}

export default Header;
