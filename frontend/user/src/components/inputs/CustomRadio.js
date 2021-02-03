import React, { PureComponent } from 'react';
import uuid from 'uuid';

class CustomRadio extends PureComponent {
  constructor(props) {
    super(props);
    const selectValue = props.list.filter((item) => item.value === props.value);
    this.state = {
      id: uuid(),
      type: props.type,
      selectedValue: selectValue[0] ? selectValue[0] : [],
    };
  }

  handleChange = (idx) => {
    const propsData = this.props;
    this.setState({
      selectedValue: propsData.list[idx],
    });
    propsData.onCreate(propsData.list[idx]);
  };

  htmlText = (text) => {
    if (!text) {
      return null;
    }
    return <em dangerouslySetInnerHTML={{ __html: text || '' }} />;
  };

  emojiCheck = (emoji) => {
    if (!emoji) {
      return null;
    }
    return <i className="emoji">{emoji}</i>;
  };

  render() {
    const { state } = this;
    const data = this.props;
    let typeClass = '';
    switch (state.type) {
      case 'card':
        typeClass = 'custom-radio--card';
        break;
      case 'button':
        typeClass = 'custom-radio--button';
        break;
      default:
        typeClass = 'custom-radio--base';
        break;
    }
    return (
      <div className={`custom-radio ${typeClass}`}>
        {data.list.map((item, index) => (
          <div key={index.toString()} className="custom-radio__item">
            <label
              className="custom-radio__label"
              htmlFor={`${state.id}${index}`}
            >
              <input
                name={state.id}
                id={`${state.id}${index}`}
                type="radio"
                value={item.value}
                checked={item.value === state.selectedValue.value}
                onChange={() => this.handleChange(index)}
              />
              <span className="custom-radio__text">
                {this.htmlText(item.text)}
                {this.emojiCheck(item.emoji)}
              </span>
            </label>
          </div>
        ))}
      </div>
    );
  }
}

export default CustomRadio;
