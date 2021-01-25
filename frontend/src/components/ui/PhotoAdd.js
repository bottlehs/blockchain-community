import React, { PureComponent } from 'react';
import Icon from './Icon';

class PhotoAdd extends PureComponent {
  static beforeAfter = (props) => {
    return (
      <ul className="col2">
        <li>
          <div className="plus">
            <button type="button">
              <em>Before</em>
              <Icon size={28} content="plus" fill="#888" />
            </button>
          </div>
        </li>
        <li>
          <div className="plus">
            <button type="button">
              <em>After</em>
              <Icon size={28} content="plus" fill="#888" />
            </button>
          </div>
        </li>
      </ul>
    );
  };

  static add = (props) => {
    const items = [];
    for (let i = 1; i <= props.count; i += 1) {
      items.push(
        <li key={i.toString()}>
          {i === 1 ? (
            <div
              className="preview"
              style={{
                backgroundImage: `url(${require('../../assets/images/temp/question.png')})`,
              }}
            >
              <button type="button" className="delete">
                <Icon size={12} content="close" fill="#fff" />
              </button>
            </div>
          ) : (
            <div className="preview" />
          )}
        </li>,
      );
    }
    return (
      <dl className={props.className}>
        <dt>
          <div className="plus">
            <button type="button">
              <Icon size={28} content="plus" fill="#888" />
            </button>
          </div>
        </dt>
        <dd>
          <ul>{items}</ul>
        </dd>
      </dl>
    );
  };

  render() {
    const propsData = this.props;
    return <div className="form-write__picture">{propsData.children}</div>;
  }
}

export default PhotoAdd;
