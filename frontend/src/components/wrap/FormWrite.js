import React, { PureComponent } from 'react';

class shopOrder extends PureComponent {
  static title = (props) => {
    return <div className="form-write__label">{props.children}</div>;
  };

  static inputs = (props) => {
    return <div className="form-write__inputs">{props.children}</div>;
  };

  static product = (props) => {
    return <article className="form-write__product">{props.children}</article>;
  };

  static content = (props) => {
    return <article className="form-write__content">{props.children}</article>;
  };

  static picture = (props) => {
    return <div className="form-write__picture">{props.children}</div>;
  };

  static thumb = (props) => {
    return <div className="form-write__product-thumb">{props.children}</div>;
  };

  static info = (props) => {
    return <div className="form-write__product-info">{props.children}</div>;
  };

  render() {
    const propsData = this.props;
    return <div className="form-write">{propsData.children}</div>;
  }
}

export default shopOrder;
