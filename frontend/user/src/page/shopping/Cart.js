import React, { PureComponent } from 'react';
import PageWrap from '../../components/wrap/Page';
import NavBar from '../../components/ui/NavigationBars';
import ButtonWrap from '../../components/wrap/ButtonWrap';
import Button from '../../components/ui/Button';
import CustomCheck from '../../components/inputs/CustomCheck';
import Quantity from '../../components/ui/Quantity';
import Icon from '../../components/ui/Icon';

class OrderComplete extends PureComponent {
  constructor(props) {
    super(props);

    const arr = {
      totalPrice: '70,000',
      totalDeliveryPrice: '2,500',
      totalPayPrice: '72,500',
      info: [
        {
          company: '린제이',
          price: '30,000',
          deliveryPrice: '2,5000',
          totalPrice: '32,500',
          showing: '4만원 이상 무료배송',
          list: [
            {
              id: 2,
              options: [{}, {}, {}],
              checked: false,
            },
            {
              id: 1,
              options: [{ status: 'payment-finished' }],
              checked: false,
            },
          ],
        },
        {
          company: '모나이트',
          price: '30,000',
          deliveryPrice: '0',
          totalPrice: '30,000',
          list: [
            {
              id: 1,
              options: [{ status: 'payment-finished' }],
              checked: false,
            },
          ],
        },
      ],
    };
    let totalCount = 0;
    for (let i = 0; i < arr.info.length; i += 1) {
      totalCount += arr.info[i].list.length;
    }

    this.state = {
      listData: arr,
      allSelected: false,
      totalCount,
      selectCount: 0,
    };
    this.handleAllSelected = this.handleAllSelected.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
  }

  handleAllSelected = (val) => {
    const { state } = this;
    const data = state.listData;
    data.info.map((items) =>
      items.list.map((item) => {
        const itemChange = item;
        itemChange.checked = val;
        return itemChange;
      }),
    );
    const selectCount = val ? state.totalCount : 0;
    this.setState({
      allSelected: val,
      selectCount,
    });
  };

  handleSelected = (val, target) => {
    const { state } = this;
    const data = state.listData;
    data.info[target[0]].list[target[1]].checked = val;
    const count = state.selectCount + (val ? 1 : -1);
    const allSelected = count === state.totalCount;
    this.setState({
      listData: data,
      selectCount: count,
      allSelected,
    });
  };

  itemsList = (items, pos) => {
    return (
      <dd className="cart-list__items">
        {items.map((item, index) => (
          <div key={index.toString()} className="cart-list__item">
            <div className="cart-list__check">
              <CustomCheck
                value={item.checked}
                target={[pos, index]}
                onCreate={this.handleSelected}
              />
            </div>
            <div className="cart-list__content">
              <div className="cart-list__info">
                <div className="thumb cart-list__thumb">
                  <img
                    src={require('../../assets/images/temp/order.jpg')}
                    alt=""
                  />
                </div>
                <div className="cart-list__title">
                  린제이 프리미엄 쿨 티트리 모델링팩 + 엄 청큰 멀티 보습앰플
                  (믹싱워터겸용) + 팩도 구세트
                </div>
              </div>
              <ul className="cart-list__options">
                {item.options.map((option, idx) => (
                  <li key={idx.toString()}>
                    <div className="cart-list__options-title">
                      옵션 : 04_트리트먼트 화이트머스크 1000ml/04_트리트먼트
                      화이트머스크
                      <div className="delete">
                        <Icon size={12} content="close" fill="#acacac" />
                      </div>
                    </div>
                    <div className="cart-list__options-etc">
                      <div className="price">
                        100,000원
                        <em>12,000원</em>
                      </div>
                      <div className="quantity">
                        <Quantity />
                        <Button
                          className="btLineMain"
                          size="ze"
                          label="바로주문"
                          onClick={() => alert('clicked')}
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </dd>
    );
  };

  lists = () => {
    const { state } = this;
    return (
      <div className="cart-list__items-wrap">
        {state.listData.info.map((items, index) => (
          <dl key={index.toString()}>
            <dt>{items.company}</dt>
            {this.itemsList(items.list, index)}
            <dd className="cart-list__items-price">
              <p className="price">
                {items.price}원 + 배송비 {items.deliveryPrice}원 =
                {items.totalPrice}원
              </p>
              {items.showing ? (
                <div className="showing">{items.showing}</div>
              ) : (
                ''
              )}
            </dd>
          </dl>
        ))}
      </div>
    );
  };

  render() {
    const { state } = this;

    return (
      <PageWrap fixed className="page-shop-cart">
        <PageWrap.top fixed>
          <NavBar title="장바구니" icon="close" />
        </PageWrap.top>

        <div className="cart-list">
          <section className="cart-list__all">
            <CustomCheck
              value={state.allSelected}
              text={`전체선택(${state.selectCount}/${state.totalCount})`}
              onCreate={this.handleAllSelected}
            />
          </section>
          {state.listData.info.length === 0 ? (
            <div className="list__empty">없습니다.</div>
          ) : (
            <this.lists />
          )}
          <section className="cart-list__total-price">
            <ul>
              <li>
                <span>총 주문 금액</span>
                <em>{state.listData.totalPrice}원</em>
              </li>
              <li>
                <span>총 배송비</span>
                <em>{state.listData.totalDeliveryPrice}원</em>
              </li>
              <li className="pay">
                <span>총 결제 금액</span>
                <em>{state.listData.totalPayPrice}원</em>
              </li>
            </ul>
          </section>
        </div>

        <PageWrap.bottom>
          <ButtonWrap>
            <Button className="btBgMain" size="lg" label="주문하기" />
          </ButtonWrap>
        </PageWrap.bottom>
      </PageWrap>
    );
  }
}

export default OrderComplete;
