import React, { PureComponent } from 'react';
import uuid from 'uuid';
import Icon from './Icon';

class CustomCheck extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: uuid(),
      selectedArr: props.selectedArr,
      value: props.value,
      text: props.text,
      checked: props.selectedArr.includes(props.value),
    };
  }

  handleChange = (value) => {
    const { state } = this;
    const arr = state.selectedArr;
    let checked = '';
    if (arr.includes(value)) {
      const idx = arr.findIndex((ele) => ele === value);
      arr.splice(idx, 1);
      checked = false;
    } else {
      arr.push(value);
      checked = true;
    }
    this.setState({
      selectedArr: arr,
      checked,
    });
    const data = this.props;
    data.onCreate(arr);
    this.selectCheck(value);
  };

  selectCheck = (value) => {
    const { state } = this;
    return state.selectedArr.includes(value);
  };

  render() {
    const { state } = this;
    return (
      <div className={`custom-check ${state.text ? '' : 'only-input'}`}>
        <input
          id={`${state.id}`}
          type="checkbox"
          checked={state.checked}
          onChange={() => this.handleChange(state.value)}
        />
        <label className="custom-check__label" htmlFor={`${state.id}`}>
          <Icon size={12} content="check" fill="#fff" />
          <em>{state.text ? state.text : ''}</em>
        </label>
      </div>
    );
  }
}

export default CustomCheck;
