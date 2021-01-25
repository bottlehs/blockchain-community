import React, { PureComponent } from 'react';

class GodahaeList extends PureComponent {
  render() {
    const propsData = this.props;
    return (
      <div className="godahae-list">
        <GodahaeListRows rows={propsData.list} />
        {propsData.children}
      </div>
    );
  }
}

class GodahaeListRows extends PureComponent {
  render() {
    const propsData = this.props;
    if (propsData.rows.length === 0) {
      return <div className="list__empty">없습니다.</div>;
    }
    return (
      <ul>
        {propsData.rows.map((item, index) => (
          <li key={index.toString()} className="godahae-list__item">
            <a href="# ">
              <div className="godahae-list__info">
                {item.thumb}
                {item.thumb ? (
                  <div className="thumb godahae-list__thumb">
                    <img
                      src={require('../../assets/images/temp/review2.jpg')}
                      alt=""
                    />
                    <em className="godahae-list__thumb-count">+2</em>
                  </div>
                ) : (
                  ''
                )}
                <div className="godahae-list__title">{item.title}</div>
                <div className="godahae-list__txt">{item.text}</div>
              </div>
            </a>
            <div className="godahae-list__etc">
              <span className="answer-count">답변 1</span>
              <a href="# " className="answer">
                나도 답변하기
              </a>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default GodahaeList;
