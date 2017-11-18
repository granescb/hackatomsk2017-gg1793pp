import React, { PropTypes } from 'react';
import Timer from 'react.timer';


function TimerBlock(props) {
  const { time } = props;
  return <Timer countDown startTime={time} />;
}

TimerBlock.propTypes = {
  time: PropTypes.number.isRequired,
};

export default TimerBlock;
