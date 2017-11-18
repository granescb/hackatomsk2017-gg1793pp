import React, { PropTypes } from 'react';
import block from 'bem-cn';

import './Button.styl';

class Button extends React.Component {

  static propTypes = {
    bsStyle: PropTypes.oneOf(['default', 'primary']),
    children: PropTypes.node,
    size: PropTypes.oneOf(['box', 'sml-box', 'mdl-box']),
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    styles: PropTypes.object,
  }

  static defaultProps = {
    type: 'text',
    bsStyle: 'default',
    size: 'box',
    className: '',
    onClick: null,
    disabled: false,
    isLoadingSpinner: false,
    styles: {},
  }
  render() {
    const b = block('button');
    const { bsStyle, size, className, onClick, disabled, styles } = this.props;
    let style = '';
    if (className) {
      if (typeof className === 'function') {
        style = className();
      } else {
        style = className;
      }
    }
    return (
      <button
        className={`${b({ style: bsStyle, disabled, size })} ${style}`}
        onClick={onClick}
        style={styles}
        disabled={disabled}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
