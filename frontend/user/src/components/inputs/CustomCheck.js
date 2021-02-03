import React, { PureComponent } from 'react';
import uuid from 'uuid';
import Icon from '../ui/Icon';

class CustomCheck extends PureComponent {
  constructor(props) {
    super(props);
    let checked = null;
    if (typeof props.checkedValues === 'object') {
      checked = props.checkedValues.includes(props.value);
    } else {
      checked = props.value;
    }
    this.state = {
      id: uuid(),
      checkedValues: props.checkedValues ? props.checkedValues : props.value,
      value: props.value,
      text: props.text,
      checked,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps !== prevState) {
      let checked = null;
      if (typeof nextProps.checkedValues === 'object') {
        checked = nextProps.checkedValues.includes(nextProps.value);
      } else {
        checked = nextProps.value;
      }
      return {
        text: nextProps.text,
        checkedValues: nextProps.checkedValues
          ? nextProps.checkedValues
          : nextProps.value,
        value: nextProps.value,
        checked,
      };
    }
    return null;
  }

  handleChange = (value) => {
    let checked = '';
    const { state } = this;
    let checkedData = state.checkedValues;
    if (typeof checkedData === 'object') {
      if (checkedData.includes(value)) {
        const idx = checkedData.findIndex((ele) => ele === value);
        checkedData.splice(idx, 1);
        checked = false;
      } else {
        checkedData.push(value);
        checked = true;
      }
    } else {
      checkedData = !state.checked;
      checked = !state.checked;
    }
    this.setState({
      checked,
      checkedValues: checkedData,
    });
    const data = this.props;
    data.onCreate(checkedData, this.props.target);
  };

  render() {
    const { state } = this;
    return (
      <div className={`custom-check ${state.text ? '' : 'only-input'}`}>
        <input
          id={`${state.id}`}
          type="checkbox"
          value={state.text}
          checked={state.checked}
          onChange={() => this.handleChange(state.value)}
        />
        <label className="custom-check__label" htmlFor={`${state.id}`}>
          <Icon size={12} content="check" fill="#fff" />
          {state.text ? <em>{state.text}</em> : ''}
        </label>
      </div>
    );
  }
}

export default CustomCheck;
