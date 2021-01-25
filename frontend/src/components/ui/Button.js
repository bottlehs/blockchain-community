import React, { PureComponent } from 'react';

class Button extends PureComponent {
  render() {
    const propsData = this.props;
    const radiusClass = propsData.radius
      ? `button-${propsData.size}--radius`
      : '';
    const sizeClass = propsData.size ? `button-${propsData.size}` : 'button-md';
    return (
      <button
        type="button"
        className={`button ${sizeClass} ${radiusClass} ${propsData.className}`}
        onClick={propsData.onClick}
        disabled={propsData.disabled}
        style={propsData.style}
      >
        {propsData.label}
      </button>
    );
  }
}

export default Button;
