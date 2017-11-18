import React, { Component, PropTypes } from 'react';
import block from 'bem-cn';
import { bind } from 'decko';
import { actions, TopUpMethods } from 'features/payment/redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './TopUpLayout.styl';
import TopUpMethodBlock from './TopUpMethodBlock';
import CardMethodBlock from './CardMethodBlock';

class TopUpLayout extends Component {

  static propTypes = {
    actionProcessing: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    initBitapsPayment: PropTypes.func.isRequired,
    onRequestError: PropTypes.func,
  };

  static defaultProps = {
    onRequestError: () => { console.error('Top Up Layout Request Error!'); },
  };

  static contextTypes = {
    router: PropTypes.object,
  };

  componentWillReceiveProps(nextProps) {
    const { actionProcessing, errorMessage,
            onRequestError, initBitapsPayment } = nextProps;
    if (this.props.actionProcessing && !actionProcessing) {
      onRequestError(errorMessage);
    }
  }


  @bind
  onMethodTopUpClick(methodID, paymentInfo) {
    const { initBitapsPayment } = this.props;
    switch (methodID) {
      case TopUpMethods.Bitaps.id:
        initBitapsPayment(paymentInfo);
        break;
      default:
        break;
    }
  }

  render() {
    const b = block('top-up-layout');
    const methodBlocksList = Object.keys(TopUpMethods).map((key, index) =>
      <TopUpMethodBlock key={index} onTopUpClick={this.onMethodTopUpClick} 
        method={TopUpMethods[key]} />,
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
    initBitapsPayment: state.payment.qiwiInitSuccess,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TopUpLayout);
