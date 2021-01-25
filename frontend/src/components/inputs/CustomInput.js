import React, { PureComponent } from 'react';

class CustomInput extends PureComponent {
  render() {
    const propsData = this.props;
    return (
      <div
        className={`custom-input ${
          propsData.className ? propsData.className : ''
        }`}
      >
        {propsData.children}
      </div>
    );
  }
}

export default CustomInput;
