import React, { PropTypes } from 'react';
import Timer from 'react.timer';


function TimerBlock(props) {
  return <Timer countDown startTime={30} />;
}

TimerBlock.propTypes = {
  time: PropTypes.number.isRequired,
};

export default TimerBlock;
