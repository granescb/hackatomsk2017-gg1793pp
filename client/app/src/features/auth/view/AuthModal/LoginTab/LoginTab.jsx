import React, { Component, PropTypes } from 'react';
import { bind } from 'decko';

import LoginInput from 'shared/view/components/Input';
import Button from 'shared/view/components/Button';
import './LoginTab.styl';

class LoginTab extends Component {
  static propTypes = {
    signInProcessing: PropTypes.bool.isRequired,
    b: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  @bind
  onLoginInputKeyPress(e) {
    if (e.key === 'Enter') this._callSignIn();
  }

  @bind
  handleSignInClick() {
    const { email, password } = this.state;
    const { signIn } = this.props;
    signIn(email, password);
  }

  @bind
  onInputChange(e) {
    const { value, name } = e.currentTarget;
    const newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  render() {
    const { b, signInProcessing } = this.props;
    const { email, password } = this.state;
    return (
      <div className={b('row-container')}>
        <div className={b('row')}>
          <LoginInput
            type="text"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={this.onInputChange}
            onKeyPress={this.onLoginInputKeyPress}
            />
        </div>
        <div className={b('row')}>
          <LoginInput
            placeholder="Пароль"
            type="password"
            name="password"
            value={password}
            onChange={this.onInputChange}
            onKeyPress={this.onLoginInputKeyPress}
          />
        </div>
        <div className={b('row')}>
          <Button
            onClick={this.handleSignInClick}
            bsStyle="additional-pure"
          >
            Вход{signInProcessing && '...'}
          </Button>
        </div>
      </div>
    );
  }
}

export default LoginTab;
