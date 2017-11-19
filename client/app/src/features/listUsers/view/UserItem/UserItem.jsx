import React, { Component, PropTypes } from 'react';
import block from 'bem-cn';

import photoImg from './img/businessman.png';
import './UserItem.styl';

class UserItem extends Component {

  static propTypes = {
    userName: PropTypes.string.isRequired,
  }

  render() {
    const b = block('user-item');
    const { userName } = this.props;
    return (
      <div className={b}>
        <img src={photoImg} alt="" />
        {userName}
      </div>
    );
  }
}

export default UserItem;
