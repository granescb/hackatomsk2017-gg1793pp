import React, { Component, PropTypes } from 'react';
import block from 'bem-cn';
import SVGInline from 'react-svg-inline';

import instagram from 'shared/view/components/Footer/img/instagram_footer.svg'; 
import vk from 'shared/view/components/Footer/img/vk_footer.svg';

import './Footer.styl';

class Footer extends Component {

  render() {
    const b = block('footer');
    return (
      <footer className={b}>
        <div className={b('wrapper', { position: 'left' })}>
          <div className={b('line')}><p>Номер телефона:</p><strong> + 7 701 751 41 00</strong></div>
          <div className={b('line')}>
            <p>VK</p>
            <div className={b('container-icon')}>
              <SVGInline svg={vk} className={b('icon')()} />
            </div>
          </div>
          <div className={b('line')}>
            <p>Instagramm</p>
            <div className={b('container-icon')}>
              <SVGInline svg={instagram} className={b('icon')()} />
            </div>
          </div>
          <div>Email: support@xakaton.com</div>
        </div>
        <div className={b('wrapper', { position: 'center' })}>
          <div><strong>Copyright  © 2016- 2017</strong></div>
        </div>
        <div className={b('wrapper', { position: 'right' })}>
          Правила
        </div>
      </footer>
    );
  }
}

export default Footer;
