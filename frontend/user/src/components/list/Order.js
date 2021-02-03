import React, { PureComponent } from 'react';

class OrderList extends PureComponent {
  render() {
    const propsData = this.props;
    return (
      <div className="order-list">
        <OrderListRows rows={propsData.list} />
      </div>
    );
  }
}

class OrderListRows extends PureComponent {
  render() {
    const propsData = this.props;
    if (propsData.rows.length === 0) {
      return <div className="list__empty">없습니다.</div>;
    }
    return (
      <div className="order-list__item">
        {propsData.rows.map((item, idx) => (
          <div key={idx.toString()} className="order-list__item-wrap">
            <div key={idx.toString()} className="order-list__info">
              <div className="thumb order-list__thumb">
                <img
                  src={require('../../assets/images/temp/order.jpg')}
                  alt=""
                />
              </div>
              <div className="order-list__title">
                린제이 프리미엄 쿨 티트리 모델링팩 + 엄 청큰 멀티 보습앰플
                (믹싱워터겸용) + 팩도 구세트
              </div>
            </div>
            <OrderListOptions options={item.options} />
          </div>
        ))}
      </div>
    );
  }
}

class OrderListOptions extends PureComponent {
  render() {
    const propsData = this.props;
    return (
      <ul className="order-list__options">
        {propsData.options.map((option, index) => (
          <li key={index.toString()}>
            <p className="order-list__options-title">
              옵션 : 04_트리트먼트 화이트머스크 1000ml/04_트리트먼트
              화이트머스크
            </p>
            <div className="order-list__options-etc">
              <span className="quantity">수량: 1개</span>
              <span className="price">
                100,000원
                {option.discount ? <em>12,000원</em> : ''}
              </span>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default OrderList;
