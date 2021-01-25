import React, { PureComponent } from 'react';
import Icon from './Icon';

class Quantity extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }

  handleClick = (type) => {
    const { state } = this;
    let count = null;
    if (type === 'plus') {
      count = state.quantity + 1;
    } else {
      count = state.quantity - 1 < 1 ? 1 : state.quantity - 1;
    }
    this.setState({
      quantity: count,
    });
    this.handleChange();
  };

  handleChange = () => {
    console.log('input change');
  };

  render() {
    const { state } = this;
    return (
      <div className="quantity-box">
        <button type="button" onClick={() => this.handleClick('minus')}>
          <Icon size={11} content="minus" fill="#888" />
        </button>
        <div className="quantity-box__input">
          <input
            type="number"
            value={state.quantity}
            disabled
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
        </div>
        <button type="button" onClick={() => this.handleClick('plus')}>
          <Icon size={13} content="plus" fill="#888" />
        </button>
      </div>
    );
  }
}

export default Quantity;
