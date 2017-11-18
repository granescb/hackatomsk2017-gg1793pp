import React, { Component, PropTypes } from 'react';
import block from 'bem-cn';
import { bind } from 'decko';

import Input from 'shared/view/components/Input';
import Button from 'shared/view/components/Button';
import './TopUpMethodBlock.styl';

import { RequisitesTypes } from 'features/payment/redux';

class TopUpMethodBlock extends Component {
  static propTypes = {
    method: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.object,
      destinationPlaceholder: PropTypes.string,
      iconFileNames: PropTypes.arrayOf(PropTypes.string),
      isPaySystem: PropTypes.bool,
      requisitesType: PropTypes.string,
    }).isRequired,
    onTopUpClick: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      requisites: '',
    };
  }

  @bind
  onInputChange({ currentTarget: { name, value } }) {
    this.setState({ [name]: value });
  }

  @bind
  onTopUpButtonClick() {
    const { method, onTopUpClick } = this.props;
    onTopUpClick(method.id, this.state.amount);
  }

  render() {
    const b = block('top-up-method-block');
    const { lang } = this.props;
    const { title, destinationPlaceholder, iconFileNames, requisitesType } = this.props.method;
    const imgClass = 'img-row';
    const imgList = iconFileNames.map((fName, index) => <img key={index} className={b(imgClass)} src={fName} />);
    const { amount, requisites } = this.state;
    return (
      <div className={b}>
        <p className={b('caption')}>{title}</p>
        <div className={b('container')}>
          <div className={b('container', { position: 'left' })}>
            { imgList }
          </div>
          <div className={b('container', { position: 'right' })}>
            <div className={b('form')}>
              <div className={b('inputs')}>
                { requisitesType === RequisitesTypes.TEXT &&
                  <div className={b('input')}>
                    <Input
                      type="text"
                      name="requisites"
                      value={requisites}
                      placeholder={destinationPlaceholder}
                      onChange={this.onInputChange}
                    />
                  </div>
                }
                <div className={b('input')}>
                  <Input
                    type="number"
                    name="amount"
                    value={amount}
                    placeholder={amount}
                    onChange={this.onInputChange}
                  />
                </div>
              </div>
              <div className={b('buttons')}>
                <Button onClick={this.onTopUpButtonClick} >
                  Оплата
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopUpMethodBlock;
