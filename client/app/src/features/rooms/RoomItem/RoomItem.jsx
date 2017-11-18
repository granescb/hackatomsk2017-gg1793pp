import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import block from 'bem-cn';

import './RoomItem.styl';

class RoomItem extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,

    onClickItem: PropTypes.func.isRequired,
    
    id: PropTypes.number.isRequired,

    isActive: PropTypes.bool.isRequired,
  }
  render() {
    const b = block('room-item');
    const { text, onClickItem, id, isActive } = this.props;
    return (
      <Link to={'/roulette'} className={b}>
        <div onClick={() => onClickItem(id)} className={b('text', { isActive })}>{text}</div>
      </Link>
    );
  }
}

export default RoomItem;
