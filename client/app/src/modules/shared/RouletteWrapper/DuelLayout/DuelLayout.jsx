import React, { Component, PropTypes } from 'react';
import block from 'bem-cn';

import './DuelLayout.styl';

class DuelLayout extends Component {
  static propTypes = {
    activeRoom: PropTypes.number.isRequired,
  }
  render() {
    const b = block('duel-layout');
    return (
      <div className={b()}>
        DuelLayout
      </div>
    );
  }

 
}

export default DuelLayout;
