import React, { PureComponent } from 'react';
import Icon from '../ui/Icon';

class CommentList extends PureComponent {
  render() {
    const info = this.props;
    return (
      <div className="comment-list">
        <CommentListRows rows={info.list} />
      </div>
    );
  }
}

class CommentListRows extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = this.props;
    if (data.rows.length === 0) {
      return <div className="list__empty">없습니다.</div>;
    }
    return (
      <ul>
        {data.rows.map((item, index) => (
          <li key={index.toString()} className={`${item.reply ? 'reply' : ''}`}>
            <div className="comment-list__thumb">
              <span className="shop-review__profile">
                <img
                  src={require('../../assets/images/temp/review2.jpg')}
                  alt=""
                />
              </span>
            </div>
            <div className="comment-list__contents">
              <p className="txt1">
                <em>zlekfl</em>
                <span>1시간</span>
              </p>
              <p className="txt2">정말 대단하세요~</p>
            </div>
            <div className="comment-list__heart">
              <button type="button">
                <Icon
                  size={15}
                  content={`heart-${item.heart ? 'on' : 'off'}`}
                  fill={item.heart ? '#AD35CF' : '#666'}
                />
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default CommentList;
