import React, { PureComponent } from 'react';

class shopOrder extends PureComponent {
  static title = (props) => {
    return <div className="shop-order-info__title">{props.children}</div>;
  };

  static content = (props) => {
    return <div className="shop-order-info__content">{props.children}</div>;
  };

  render() {
    const propsData = this.props;
    return <div className="shop-order-info">{propsData.children}</div>;
  }
}

export default shopOrder;
