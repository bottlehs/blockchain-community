import React, { PureComponent } from 'react';

class ButtonWrap extends PureComponent {
  static col = (props) => {
    return <div className="button__outbox-col">{props.children}</div>;
  };

  render() {
    const propsData = this.props;
    return (
      <div
        className={`button__outbox ${propsData.isPadding ? 'is-padding' : ''} ${
          propsData.limit ? 'limit' : ''
        }`}
      >
        <div className="button__outbox-row">{propsData.children}</div>
      </div>
    );
  }
}

export default ButtonWrap;
