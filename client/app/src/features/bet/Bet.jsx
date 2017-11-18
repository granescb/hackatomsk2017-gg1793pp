import React, { Component, PropTypes } from 'react';
import block from 'bem-cn';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bind } from 'decko';

import { actions as betActions } from 'features/bet/redux';

import Input from 'shared/view/components/Input';
import Button from 'shared/view/components/Button';
import './Bet.styl';

class Bet extends Component {

  constructor(props) {
    super(props);
    this.state = {
      amount: null,
    };
  }

  static propTypes = {
    makeBet: PropTypes.func.isRequired,

    userBalance: PropTypes.number.isRequired,
  }

  @bind
  handleMakeBetClick() {
    this.props.makeBet(this.state.amount);
  }

  @bind
  onInputChange(e) {
    const { value, name } = e.currentTarget;
    const newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  @bind
  checkMakeBet() {
    const { amount } = this.state;
    const { userBalance } = this.props;
    const flag = userBalance < amount;
    return flag;
  }

  render() {
    const b = block('bet');
    const { amount } = this.state;
    return (
      <div className={b}>
        <div className={b('input-bet')}>
          <Input 
            type="text"
            name="amount"
            placeholder="Пароль"
            value={amount}
            onChange={this.onInputChange} 
          />
        </div>
        <div className={b('button-bet')}>
          <Button
            onClick={this.handleMakeBetClick}
            disabled={this.checkMakeBet()}
            bsStyle="primary">Вложить еще
          </Button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userBalance: state.auth.balance,
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    makeBet: betActions.makeBet,
  };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Bet);
