import React, { PropTypes } from 'react';
import asyncPoll from 'react-async-poll';

function BalanceBlock(props) {
  const { balance, className } = props;
  return (
    <div className={className}>
      { `Баланс: ${balance} фантик` }
    </div>
  );
}

BalanceBlock.propTypes = {
  balance: PropTypes.number.isRequired,
  className: PropTypes.func.isRequired,
};


function onPollInterval(props) {
  props.loadBalance();
}

export default asyncPoll(3 * 1000, onPollInterval)(BalanceBlock);
