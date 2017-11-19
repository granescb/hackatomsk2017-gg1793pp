import React, { Component, PropTypes } from 'react';
import block from 'bem-cn';

import './UserItem.styl';

class UserItem extends Component {

  static propTypes = {
  }

  render() {
    const b = block('user-item');
    return (
      <div className={b}>
        userItem
      </div>
    );
  }
}

export default UserItem;
