import React, { Component, PropTypes } from 'react';
import block from 'bem-cn';
import { bind } from 'decko';
import { actions as paymentActions, TopUpMethods } from 'features/payment/redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './TopUpLayout.styl';
import TopUpMethodBlock from './TopUpMethodBlock';

class TopUpLayout extends Component {

  static propTypes = {
    actionProcessing: PropTypes.bool.isRequired,

    initBitapsPayment: PropTypes.func.isRequired,
    initCandyWrapper: PropTypes.func.isRequired,
  };

  static defaultProps = {
    onRequestError: () => { console.error('Top Up Layout Request Error!'); },
  };

  static contextTypes = {
    router: PropTypes.object,
  };

  @bind
  onMethodTopUpClick(methodID, amount) {
    const { initBitapsPayment, initCandyWrapper } = this.props;
    switch (methodID) {
      case TopUpMethods.BITAPS.id:
        initBitapsPayment(methodID, amount);
        break;
      case TopUpMethods.CANDYWRAPPERS.id:
        initCandyWrapper(methodID, amount);
        break;
      default:
        break;
    }
  }

  render() {
    const b = block('top-up-layout');
    const methodBlocksList = Object.keys(TopUpMethods).map((key, index) =>
      <TopUpMethodBlock 
        key={index}
        onTopUpClick={this.onMethodTopUpClick} 
        method={TopUpMethods[key]}
        />,
  );

    return (
      <div className={b}>
        {methodBlocksList}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    actionProcessing: state.payment.actionProcessing,
    errorMessage: state.payment.errorMessage,
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    initCandyWrapper: paymentActions.initCandyWrapper,
    initBitapsPayment: paymentActions.initBitapsPayment,
  };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TopUpLayout);
