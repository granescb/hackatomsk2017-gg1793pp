import React, { Component, PropTypes } from 'react';
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
      <div className={b}>
        <div onClick={() => onClickItem(id)} className={b('text', { isActive })}>{text}</div>
      </div>
    );
  }
}

export default RoomItem;
