import React, { PropTypes } from 'react';
import block from 'bem-cn';
import { Link } from 'react-router';
import SVGInline from 'react-svg-inline';

import AuthBlock from 'features/auth';
import logoImg from './img/logo.png';
import avatarImg from './img/avatar.png'
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
          <img className={b('logo-wrapper')} src={logoImg} alt="" />
          <p className={b('text')}>Betting-software</p>
        </Link>
        <div className={b('wrapper', { position: 'center' })}></div>
        <div className={b('wrapper', { position: 'right' })}>
          <div className={b('user-wrapper')}>
          <div>
            <AuthBlock 
              extraParams={extraParams}
            />  
            
              <Link className={b('button')} to={'/top-up'}>
                <div>Пополнить счет</div>
              </Link>
              <Link className={b('button')} to={'/withdrawal'}>
                <div>Снять</div>
              </Link>
            </div>
            <img className = {b('user-avatar')} src={avatarImg} />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
