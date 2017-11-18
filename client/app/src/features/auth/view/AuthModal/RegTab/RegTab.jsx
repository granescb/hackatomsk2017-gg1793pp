import React, { Component, PropTypes } from 'react';
import { bind } from 'decko';

import LoginInput from 'shared/view/components/Input';
import Button from 'shared/view/components/Button';

class RegTab extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  static propTypes = {
    b: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,

    signUpProcessing: PropTypes.bool.isRequired,
  }

  @bind
  handleSignUpClick() {
    const { email, password } = this.state;
    const { signUp } = this.props;
    signUp(email, password);
  }

  @bind
  onInputChange(e) {
    const { value, name } = e.currentTarget;
    const newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  render() {
    const { b, signUpProcessing } = this.props;
    const { email, password } = this.state;
    
    return (
      <div>
        <div className={b('row')}>
          <LoginInput 
            type="text"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={this.onInputChange}
            />
        </div>
        <div className={b('row')}>
          <LoginInput 
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={this.onInputChange} />
        </div>
        <div className={b('reg-button')}>
          <Button
            onClick={this.handleSignUpClick}
            bsStyle="primary"
            isLoadingSpinner={signUpProcessing}>Зарегистрироваться{ signUpProcessing && '...'}
          </Button>
        </div>
      </div>
    );
  }
}

export default RegTab;
