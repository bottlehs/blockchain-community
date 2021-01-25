import React, { PureComponent } from 'react';
import Icon from '../ui/Icon';

class LayerPopup extends PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.opened !== prevState.opened) {
      return {
        opened: nextProps.opened,
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      opened: props.opened,
    };
  }

  handleClosed = () => {
    this.setState({
      opened: false,
    });
    const data = this.props;
    data.onCreate(false);
  };

  render() {
    const { state } = this;
    const propsData = this.props;
    return (
      <div
        className={`modal ${propsData.className || ''} ${
          state.opened ? 'modal--opened' : ''
        }`}
      >
        <div
          className="modal__bg"
          onClick={() => this.handleClosed()}
          role="presentation"
        />
        <div className="modal__inner">
          {propsData.title ? (
            <div className="modal__title">
              <em>{propsData.title}</em>
              <button type="button" onClick={() => this.handleClosed()}>
                <Icon size={15} content="close" />
              </button>
            </div>
          ) : (
            ''
          )}
          <div className="modal__content">{propsData.children}</div>
        </div>
      </div>
    );
  }
}

export default LayerPopup;
