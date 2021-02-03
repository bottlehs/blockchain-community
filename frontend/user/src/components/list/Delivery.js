import React, { PureComponent } from 'react';
import Icon from '../ui/Icon';
import Button from '../ui/Button';

class DeliveryList extends PureComponent {
  render() {
    const propsData = this.props;
    if (propsData.onlyOne) {
      return (
        <div className="delivery-list">
          <DeliveryListRows rows={propsData.list.list} />
        </div>
      );
    }
    return (
      <div className="delivery-list">
        <DeliveryListGroup list={propsData.list} />
      </div>
    );
  }
}

class DeliveryListGroup extends PureComponent {
  render() {
    const propsData = this.props;
    if (propsData.list.length === 0) {
      return <div className="list__empty">없습니다.</div>;
    }
    return (
      <div className="delivery-list__items">
        {propsData.list.map((rows, idx) => (
          <div key={idx.toString()} className="delivery-list__items-wrap">
            <div className="delivery-list__items-title">
              <div className="date">2019.09.25</div>
              <button type="button" className="arrow-link">
                <Icon content="arrow-right" size={14} fill="#000" />
              </button>
            </div>
            <DeliveryListRows rows={rows.list} />
          </div>
        ))}
      </div>
    );
  }
}

class DeliveryListRows extends PureComponent {
  DeliveryStatus = (status) => {
    let text = null;
    switch (status) {
      case 'delivery-ready':
        text = '배송 준비중';
        break;
      case 'delivery-ing':
        text = '배송중';
        break;
      case 'delivery-completed':
        text = '배송완료';
        break;
      default:
        text = '결제완료';
    }
    const statusChangeClass =
      status === 'payment-finished' ? 'pay-finished' : '';
    return (
      <span className={`status ${statusChangeClass}`}>
        {text !== '결제완료' ? (
          <button type="button">
            <em>{text}</em>
            <Icon content="arrow-right" size={11} fill="6C008B" />
          </button>
        ) : (
          <em>{text}</em>
        )}
      </span>
    );
  };

  DeliveryStatusButton = (status) => {
    if (status !== 'delivery-completed') {
      return null;
    }
    return (
      <div className="delivery-list__button">
        <span>
          <Button className="btLineGray" size="sm" label="상품 재구매" radius />
        </span>
        <span>
          <Button className="btLineGray" size="sm" label="후기 작성" radius />
        </span>
      </div>
    );
  };

  render() {
    const propsData = this.props;
    return (
      <ul className="delivery-list__item">
        {propsData.rows.map((item, idx) => (
          <li key={idx.toString()}>
            <div className="delivery-list__info">
              <div className="thumb delivery-list__thumb">
                <img
                  src={require('../../assets/images/temp/order.jpg')}
                  alt=""
                />
              </div>
              <p className="delivery-list__title">
                더퓨어로터스 제주 연꽃잎 & 동백 미스트
              </p>
              <p className="delivery-list__option">
                옵션 : 04_트리트먼트 화이트머스크 1000ml/04_트리트먼트
                화이트머스크
              </p>
              <p className="delivery-list__price">100,000원 / 1개</p>
              <div className="delivery-list__etc">
                <button type="button" className="question">
                  <em>문의</em>
                  <Icon content="arrow-right" size={11} fill="#000" />
                </button>
                {this.DeliveryStatus(item.status)}
              </div>
            </div>
            {this.DeliveryStatusButton(item.status)}
          </li>
        ))}
      </ul>
    );
  }
}

export default DeliveryList;
