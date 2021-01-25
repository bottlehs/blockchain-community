import React, { PureComponent } from 'react';
import PageWrap from '../../components/wrap/Page';
import NavBar from '../../components/ui/NavigationBars';
import Icon from '../../components/ui/Icon';

class WishList extends PureComponent {
  wishListRows = (props) => {
    return (
      <ul>
        {props.list.map((item, index) => (
          <li key={index.toString()}>
            <div className="thumb wish-list__thumb">
              <span
                style={{
                  backgroundImage: `url(${require('../../assets/images/temp/order.jpg')})`,
                }}
              />
              <button type="button">
                <Icon size={18} content="heart-on" fill="#AD35CF" />
              </button>
            </div>
            <p className="wish-list__brand">브랜드명</p>
            <p className="wish-list__title">단백질 흑임자 죽 한식도시락</p>
            <div className="wish-list__price">
              <span className="cost">100,000원</span>
              <p className="sale-price">
                <span className="sale">25%</span>
                <span className="price">75,000원</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  render() {
    const arr = [
      { id: 1 },
      { id: 2 },
      { id: 2 },
      { id: 2 },
      { id: 2 },
      { id: 2 },
      { id: 2 },
      { id: 1 },
      { id: 2 },
      { id: 2 },
      { id: 2 },
      { id: 2 },
      { id: 2 },
      { id: 2 },
      { id: 1 },
      { id: 2 },
      { id: 2 },
      { id: 2 },
      { id: 2 },
      { id: 2 },
      { id: 2 },
    ];

    return (
      <PageWrap fixed className="page-wish-list">
        <PageWrap.top>
          <NavBar title="찜 한 상품" icon="close" />
        </PageWrap.top>

        <div className="wish-list">
          {arr.length === 0 ? (
            <div>없습니다.</div>
          ) : (
            <this.wishListRows list={arr} />
          )}
        </div>
      </PageWrap>
    );
  }
}

export default WishList;
