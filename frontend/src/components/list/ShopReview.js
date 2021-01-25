import React, { PureComponent } from 'react';
import CustomSlider from '../ui/CustomSlider';
import StarScore from '../ui/StarScore';
import Icon from '../ui/Icon';

class ShoppingReviewList extends PureComponent {
  render() {
    const propsData = this.props;
    return (
      <div className="shop-review">
        <ShoppingReviewListRows rows={propsData.list} />
        <button type="button" className="list__more">
          {propsData.moreTitle} 더보기
        </button>
      </div>
    );
  }
}

class ShoppingReviewListRows extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      current: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(num) {
    const { state } = this;
    const checkNum = state.current;
    this.setState({
      current: checkNum === num ? null : num,
    });
  }

  render() {
    const { state } = this;
    const propsData = this.props;
    const activeCheck = (val) => state.current === val;
    if (propsData.rows.length === 0) {
      return <div className="list__empty">없습니다.</div>;
    }
    return (
      <ul>
        {propsData.rows.map((item, index) => (
          <li
            key={index.toString()}
            className={`shop-review__item ${
              activeCheck(index) ? 'active' : ''
            }`}
          >
            <div className="shop-review__header">
              <div className="shop-review__info">
                <span className="shop-review__profile">
                  <img
                    src={require('../../assets/images/temp/review2.jpg')}
                    alt=""
                  />
                </span>
                <div className="shop-review__name">
                  <em>손예진</em>
                  <span>I</span>
                </div>
                <div className="shop-review__date">
                  <span>20.02.05</span>
                  <i>·</i>
                  <span>신고</span>
                </div>
              </div>
              <ul className="shop-review__count">
                <li className="shop-review__count-reply">
                  <button type="button">
                    <Icon size={18} content="reply" fill="#000" /> 5
                  </button>
                </li>
                <li className="shop-review__count-heart">
                  <button type="button">
                    <Icon size={18} content="heart-off" fill="#000" /> 25
                  </button>
                </li>
              </ul>
            </div>
            <StarScore rating={4} />
            <div className="shop-review__title">
              정말 최고의 프로그램입니다.
            </div>
            <div className="shop-review__content">
              <div className="shop-review__content-text">
                인스타그램 계정에서 가져온 포동포동 시절,
                <br />
                보는 사람들마다 지금의 저와
                <br />
                이미지 자체가 다르다고 얘기해요.
                <br />
                저 때만 해도 60kg 중반이었으니까요...^^;;
                <br />
                제가 프로그램을 시작한 이유는,
                <br />
                극단적인 다이어트 패턴에서 벗어나고 싶어서였어요.
                <br />
                <br />
                극단적으로 다이어트하면서
                <br />
                스스로 자존감을 마구마구 떨어뜨렸거든요.
                <br />
                자조적으로 욕도 하고,
                <br />
                이것밖에 못 하냐고 타박하고...
                <br />
                <br />
                그런 부분을 다해와 함께바꾸고 싶었어요.
              </div>
              <CustomSlider
                pagingType="number"
                contents={() =>
                  [1, 2, 3].map((num) => (
                    <div key={num.toString()}>
                      <img
                        src={require('../../assets/images/temp/review2.jpg')}
                        alt=""
                      />
                    </div>
                  ))
                }
              />
            </div>
            <div className="shop-review__more">
              <span onClick={() => this.handleClick(index)} role="presentation">
                {activeCheck(index) ? '접기' : '더보기'}
                <Icon size={15} content="arrow-down" fill="#d1d1d1" />
              </span>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default ShoppingReviewList;
