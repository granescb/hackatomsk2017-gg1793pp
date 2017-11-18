import React, { Component, PropTypes } from 'react';
import block from 'bem-cn';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bind } from 'decko';

import { actions as roomsActions } from 'features/rooms/redux';

import typeRoom from 'features/rooms/redux/data/typeRoom.js';
import RoomItem from './RoomItem';
import './Rooms.styl';

class Rooms extends Component {

  static propTypes = {
    activeRoom: PropTypes.number.isRequired,

    setActiveRoom: PropTypes.func.isRequired,
  }

  @bind
  onClickRoom(id) {
    this.props.setActiveRoom(id);
  }

  render() {
    const b = block('rooms');
    const { activeRoom } = this.props;
    const layout = Object.keys(typeRoom).map(key =>
      <RoomItem
        text={typeRoom[key].text}
        id={typeRoom[key].id}
        isActive={typeRoom[key].id === activeRoom}
        onClickItem={this.onClickRoom}
      />,
    );
    return (
      <div className={b}>
        {layout}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeRoom: state.rooms.activeRoom,
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    setActiveRoom: roomsActions.setActiveRoom,
  };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
