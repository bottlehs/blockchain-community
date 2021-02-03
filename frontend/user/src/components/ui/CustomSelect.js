import React, { PureComponent } from 'react';
import Icon from './Icon';

class CustomSelect extends PureComponent {
  constructor(props) {
    super(props);
    const selectValue = props.list.filter((item) => item.value === props.value);
    this.state = {
      selectedValue: selectValue[0] ? selectValue[0] : null,
      fixed: !!props.fixed,
      active: false,
      placeholder: props.placeholder ? props.placeholder : '선택해주세요.',
    };
  }

  handleActive = () => {
    const { state } = this;
    this.setState({
      active: !state.active,
    });
  };

  handleSelected = (idx) => {
    const data = this.props;
    this.setState({
      selectedValue: data.list[idx],
      active: false,
    });
    data.onCreate(data.list[idx]);
  };

  render() {
    const { state } = this;
    const data = this.props;
    return (
      <div
        className={`custom-select ${state.fixed ? 'fixed' : ''} ${
          state.active ? 'active' : ''
        }`}
      >
        <dl className="custom-select__box">
          <dt
            className="custom-select__title"
            onClick={() => this.handleActive()}
            role="presentation"
          >
            {state.selectedValue ? state.selectedValue.text : state.placeholder}
            <Icon size={15} content="arrow-down" fill="#000" />
          </dt>
          <dd className="custom-select__list">
            <div className="custom-select__list-box">
              {data.list.map((item, index) => (
                <div
                  key={index.toString()}
                  className="custom-select__list-item"
                  onClick={() => this.handleSelected(index)}
                  role="presentation"
                >
                  {item.text}
                </div>
              ))}
            </div>
          </dd>
        </dl>
      </div>
    );
  }
}

export default CustomSelect;
