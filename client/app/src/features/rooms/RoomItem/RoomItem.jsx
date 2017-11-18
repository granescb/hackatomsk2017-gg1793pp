import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import block from 'bem-cn';

import './RoomItem.styl';

class RoomItem extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,

    onClickItem: PropTypes.func.isRequired,

    iconFileNames: PropTypes.arrayOf(PropTypes.string).isRequired,

    id: PropTypes.number.isRequired,

    isActive: PropTypes.bool.isRequired,
  }
  render() {
    const b = block('room-item');
    const { text, onClickItem, id, isActive, iconFileNames } = this.props;
    return (
      <Link to={'/roulette'} onClick={() => onClickItem(id)} className={b({ isActive })}>
        <div className={b('icon-wrapper')}>
          <img className={b('icon')} src={iconFileNames} />
        </div>
        <div className={b('text', { isActive })}>
          {text}
        </div>
      </Link>
    );
  }
}

export default RoomItem;
