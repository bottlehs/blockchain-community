import React, { PureComponent } from 'react';
import Icon from '../ui/Icon';

class CandidReviewList extends PureComponent {
  render() {
    const propsData = this.props;
    return (
      <div className="candid-review">
        <CandidReviewListRows rows={propsData.list} best={propsData.best} />
      </div>
    );
  }
}

class CandidReviewListRows extends PureComponent {
  Best = () => {
    return (
      <a href="# " className="candid-review__info">
        <ul className="candid-review__best-thumb">
          <li>
            <img
              src={require('../../assets/images/temp/img_before.jpg')}
              alt=""
            />
          </li>
          <li>
            <img
              src={require('../../assets/images/temp/img_after.jpg')}
              alt=""
            />
          </li>
        </ul>
        <div className="candid-review__best-title">
          내 얼굴은 팬케이크처럼 보였고 내 몸은 더 이상 모양이 없었습니다.
        </div>
        <div className="candid-review__best-text">
          나는 많은 다른 방법으로 체중을 줄이려고 노력했지만 일반적으로 효과가
          없었습니다. 그래서 나는 나는 많은 다른 방법으로 체중을 줄이려고
          노력했지만 일반적으로 효과가 없었습니다. 그래서 나는...
        </div>
      </a>
    );
  };

  Base = () => {
    return (
      <a href="# " className="candid-review__info">
        <div className="candid-review__txt">
          나는 많은 다른 방법으로 체중을 줄이려고 노력했지만 일반적으로 효과가
          없었습니다. 그래서 나는 나는 많은 다른 방법으로 체중을 줄이려고
          노력했지만 일반적으로 효과가 없었습니다. 그래서 나는...
        </div>
        <div className="candid-review__thumb">
          <img src={require('../../assets/images/temp/review1.jpg')} alt="" />
        </div>
      </a>
    );
  };

  render() {
    const propsData = this.props;
    return (
      <ul>
        {propsData.rows.map((item, index) => (
          <li
            key={index.toString()}
            className={`candid-review__item ${
              propsData.best && index === 0 ? 'best' : ''
            }`}
          >
            {propsData.best && index === 0 ? <this.Best /> : <this.Base />}
            <div className="candid-review__etc">
              <p className="share">
                <button type="button">
                  <Icon size={18} content="heart-off" fill="#000" />
                </button>
                <button type="button">
                  <Icon size={18} content="share" fill="#000" />
                </button>
              </p>
              <span>김희선 님의 솔직후기</span>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default CandidReviewList;
