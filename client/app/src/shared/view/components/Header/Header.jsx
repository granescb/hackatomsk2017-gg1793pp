import React, { PropTypes } from 'react';
import block from 'bem-cn';
import { Link } from 'react-router';
import SVGInline from 'react-svg-inline';

import logoImg from './img/logo.svg';
import './Header.styl';

class Header extends React.Component {

  static propTypes = {

    onMenuItemAuthBlockClick: PropTypes.func.isRequired,
  }

  render() {
    const b = block('header');
    return (
      <div className={b}>
          <div className={b('img-container')}>
            <SVGInline
              svg={logoImg}
              className={b('img')()}
              classSuffix=""
              onClick={this.onGoogleLoginClick}
            />
          </div>
        <Link className={b('wrapper', { position: 'left' })} to={'/roulette'}>
        </Link>
        <div className={b('wrapper', { position: 'center' })}></div>
        <div className={b('wrapper', { position: 'right' })}>
          <Link className={b('button')} to={'/top-up'}>
            <div>Пополнить</div>
          </Link>
          <Link className={b('button')} to={'/withdrawal'}>
            <div>Снять</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
