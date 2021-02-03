import React, { PureComponent } from 'react';

class page extends PureComponent {
  static top = (props) => {
    return (
      <div className={`page-sec__top ${props.fixed ? 'fixed' : ''}`}>
        {props.children}
      </div>
    );
  };

  static bottom = (props) => {
    return (
      <div
        className={`page-sec__bottom ${props.fixed ? 'fixed' : ''} ${
          props.isLine ? 'lined' : ''
        }`}
      >
        {props.children}
      </div>
    );
  };

  render() {
    const propsData = this.props;
    const fixed = propsData.fixed ? 'fixed-head' : '';
    const footFixed = propsData.footFixed ? 'fixed-foot' : '';
    return (
      <div className={`page-sec ${fixed} ${footFixed} ${propsData.className}`}>
        {propsData.children}
      </div>
    );
  }
}

export default page;
