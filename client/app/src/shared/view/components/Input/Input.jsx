import React, { PropTypes } from 'react';
import block from 'bem-cn';

import './Input.styl';

class Input extends React.Component {

  static propTypes = {
    type: PropTypes.oneOf(['text', 'select', 'password', 'select-primary', 'select-additional', 'number', 'date']).isRequired,
    name: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    pattern: PropTypes.string,
    selectOptions: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
      text: PropTypes.string,
      isBold: PropTypes.bool,
    })),
    styles: PropTypes.object,
  }

  static defaultProps = {
    type: 'text',
    name: '',
    className: '',
    value: '',
    pattern: '',
    styles: {},
  }

  render() {
    const b = block('input');
    const { type, value, onChange, name, placeholder, pattern, selectOptions, 
      styles, className, ...props } = this.props;

    let styleClass = '';
    if (className) {
      if (typeof className === 'function') {
        styleClass = className();
      } else {
        styleClass = className;
      }
    }

    let optionslist;
    if (selectOptions) {
      optionslist = selectOptions.map((option, index) => {
        return <option key={index} className={b({ type }, { bold: option.isBold })} value={option.value}>{option.text}</option>;
      });
    }
    let childElem;
    const defaultSelectVal = selectOptions && selectOptions.length ? selectOptions[0].value : '';

    switch (type) {
      case 'select':
        childElem = (<div className={b('select-wrapper')}>
          <select
            value={value || defaultSelectVal}
            className={b('select')}
            name={name}
            onChange={onChange}
            {...props}
          >
            {optionslist}
          </select>
        </div>);
        break;
      case 'select-primary':
        childElem = (<div className={b('select-wrapper')}>
          <select
            value={value}
            className={b('select', { primary: true })}
            name={name}
            onChange={onChange}
            {...props}
          >
            {optionslist}
          </select>
        </div>);
        break;
      case 'select-additional':
        childElem = (<div className={b('select-wrapper')}>
          <select
            value={value}
            className={b('select', { additional: true })}
            name={name}
            onChange={onChange}
            {...props}
          >
            {optionslist}
          </select>
        </div>);
        break;
      case 'date':
        childElem = (<div className={b('select-wrapper')}>
          <input
            type="date"
            value={value}
            className={b('date')}
            name={name}
            onChange={onChange}
            {...props}
          >
            {optionslist}
          </input>
        </div>);
        break;

      default:
        childElem = (<input
          className={b('input',{styleClass})}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...props}
        />);
    }
    return (
      <div className={className} style={styles} className={b}>
        {childElem}
      </div>
    );
  }
}

export default Input;
