import React, { Component, PropTypes } from 'react';
import block from 'bem-cn';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bind } from 'decko';

import { actions as listUsersActions } from 'features/listUsers/redux';

import UserItem from './UserItem';
import './ListUsers.styl';

class ListUsers extends Component {

  static propTypes = {
    getUsersRoom: PropTypes.func.isRequired,

    isOpenRoom: PropTypes.bool.isRequired,

    users: PropTypes.array.isRequired,
  }
  
  componentWillReceiveProps(nextProps) {
    const { isOpenRoom, getUsersRoom } = nextProps;
    if (isOpenRoom && isOpenRoom !== this.props.isOpenRoom) {
      getUsersRoom();
    }
  }

  render() {
    const b = block('list-users');
    const { users } = this.props;

    let layout = null;
    if (users.length > 0) {
      layout = users.map((user) => {
        return <UserItem />;
      });
    }
    return (
      <div className={b}>
        {layout}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userBalance: state.auth.balance,
    isOpenRoom: state.roulette.isOpenRoom,
    users: state.listUsers.users,
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    getUsersRoom: listUsersActions.getUsersRoom,
  };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);
