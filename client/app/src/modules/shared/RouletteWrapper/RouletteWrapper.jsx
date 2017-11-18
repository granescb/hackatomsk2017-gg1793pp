import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import block from 'bem-cn';

import typeRoom from 'features/rooms/redux/data/typeRoom.js';
import DuelLayout from './DuelLayout';
import './RouletteWrapper.styl';

class RouletteWrapper extends Component {
  static propTypes = {
    activeRoom: PropTypes.number.isRequired,
  }
  render() {
    const b = block('roulette-wrapper');
    const { activeRoom } = this.props;
    let layout;

    switch (activeRoom) {
      case typeRoom.duel.id:
        layout = <DuelLayout />;
        break;
      case typeRoom.fastPlay.id:
        layout = <div>null</div>;
        break;
      case typeRoom.classicPlay.id:
        layout = <div>null</div>;
        break;
      default:
        layout = <DuelLayout />;
        break;
    }
    return (
      <div className={b()}>
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
  };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RouletteWrapper);
