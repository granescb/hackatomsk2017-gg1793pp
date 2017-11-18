import React, { Component, PropTypes } from 'react';
import block from 'bem-cn';
import { bind } from 'decko';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { TopUpLayout } from 'features/payment/';
import './Layout.styl';

class PaymentLayout extends Component {

  static propTypes = {
  }

  static defaultProps = {
    addNotification: null,
  }

  render() {
    const b = block('payment');
    return (
      <div className={b()}>
        <div className={b('wrapper')}>
          <TopUpLayout />
        </div>
      </div>
    );
  }
}

export default PaymentLayout;
