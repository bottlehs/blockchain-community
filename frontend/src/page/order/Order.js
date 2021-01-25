import React, { PureComponent } from 'react';
import PageWrap from '../../components/wrap/Page';
import NavBar from '../../components/ui/NavigationBars';
import ShopOrder from '../../components/wrap/ShopOrder';
import OrderList from '../../components/list/Order';
import CustomSelect from '../../components/inputs/CustomSelect';
import CustomInput from '../../components/inputs/CustomInput';
import CustomCheck from '../../components/inputs/CustomCheck';
import CustomRadio from '../../components/inputs/CustomRadio';
import ButtonWrap from '../../components/wrap/ButtonWrap';
import Button from '../../components/ui/Button';

class Order extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      deliveryAddress: 'base',
      saveAddress: false,
      paymentMethod: 1,
      pointAllUse: 1,
      agree: 1,
      deliveryMemo: null,
    };

    this.handleDeliveryAddress = this.handleDeliveryAddress.bind(this);
    this.handleSaveAddress = this.handleSaveAddress.bind(this);
    this.handlePaymentMethod = this.handlePaymentMethod.bind(this);
    this.handlePointAllUse = this.handlePointAllUse.bind(this);
    this.handleAgree = this.handleAgree.bind(this);
    this.handleDeliveryMemo = this.handleDeliveryMemo.bind(this);
  }

  AddressSetting = () => {
    const { state } = this;
    if (state.deliveryAddress === 'base') {
      return (
        <div className="address-selected">
          <p>
            (07321) 서울특별시 마포구 독막로 331
            <br />
            마스터즈타워빌딩 1301호
          </p>
          <p>010-2525-2525</p>
        </div>
      );
    }
    return (
      <div className="address-inputs">
        <ul>
          <li>
            <span className="label">이름</span>
            <CustomInput>
              <input type="text" />
            </CustomInput>
          </li>
          <li>
            <span className="label">연락처</span>
            <CustomInput>
              <input type="tel" maxLength={11} />
            </CustomInput>
          </li>
          <li>
            <span className="label">주소</span>
            <div className="zip-code">
              <CustomInput>
                <input type="tel" maxLength={6} />
              </CustomInput>
              <div className="zip-code__button">
                <Button className="btBgMain" label="검색" />
              </div>
            </div>
            <CustomInput>
              <input type="text" maxLength={10} />
            </CustomInput>
            <CustomInput>
              <input type="text" placeholder="상세주소 입력" maxLength={10} />
            </CustomInput>
          </li>
        </ul>
        <div className="save">
          <CustomCheck
            value={state.saveAddress}
            text="배송지 저장"
            onCreate={this.handleSaveAddress}
          />
        </div>
      </div>
    );
  };

  handleDeliveryAddress(obj) {
    this.setState({
      deliveryAddress: obj.value,
    });
  }

  handleSaveAddress(val) {
    this.setState({
      saveAddress: val,
    });
  }

  handlePaymentMethod(obj) {
    this.setState({
      paymentMethod: obj.value,
    });
  }

  handlePointAllUse(values) {
    this.setState({
      pointAllUse: values,
    });
  }

  handleAgree(values) {
    this.setState({
      agree: values,
    });
  }

  handleDeliveryMemo(obj) {
    this.setState({
      deliveryMemo: obj.value,
    });
  }

  render() {
    const { state } = this;

    const arr = [
      { id: 1, options: [{ discount: true, status: 'payment-finished' }] },
      {
        id: 2,
        options: [{ discount: false }, { discount: true }, { discount: true }],
      },
    ];

    const paymentMethodArr = [
      { text: '신용카드', value: 1 },
      { text: '휴대폰', value: 2 },
      { text: '무통장', value: 3 },
      { text: '카카오페이', value: 4 },
    ];

    const deliveryMemoArr = [
      { text: '빠른 배송부탁드립니다.', value: 1 },
      { text: '배송 전 연락부탁드립니다.', value: 2 },
    ];
    const deliveryAddressArr = [
      { text: '다해(기본배송지)', value: 'base' },
      { text: '배송지 신규입력', value: 'etc' },
    ];

    return (
      <PageWrap fixed className="page-order">
        <PageWrap.top>
          <NavBar title="주문하기" icon="close" />
        </PageWrap.top>

        <ShopOrder>
          <ShopOrder.title>주문상품</ShopOrder.title>
          <OrderList list={arr} />

          <ShopOrder.title>배송정보</ShopOrder.title>
          <ShopOrder.content>
            <div className="order-content__address">
              <CustomSelect
                list={deliveryAddressArr}
                value={state.deliveryAddress}
                placeholder="배송지를 선택해주세요."
                fixed
                onCreate={this.handleDeliveryAddress}
              />
              <this.AddressSetting />
              <CustomSelect
                list={deliveryMemoArr}
                value={state.deliveryMemo}
                placeholder="배송 메모를 선택해주세요."
                fixed
                onCreate={this.handleDeliveryMemo}
              />
            </div>
          </ShopOrder.content>

          <ShopOrder.title>쿠폰/적립금</ShopOrder.title>
          <ShopOrder.content>
            <div className="order-content__coupon">
              <div className="point-input">
                <em>적립금</em>
                <CustomInput>
                  <input type="number" />
                </CustomInput>
                <span>원</span>
              </div>
              <div className="save-point">
                <p className="current">
                  <span>보유 적립금</span>
                  <em>1,000원</em>
                </p>
                <CustomCheck
                  value={state.pointAllUse}
                  text="전액사용"
                  onCreate={this.handlePointAllUse}
                />
              </div>
              <p className="text">
                적립금은 최소 1,000원부터 사용이 가능합니다.
              </p>
            </div>
          </ShopOrder.content>

          <ShopOrder.title>최종 결제금액</ShopOrder.title>
          <ShopOrder.content>
            <div className="order-content order-content--price">
              <dl>
                <dt>총 주문 금액</dt>
                <dd>70,000원</dd>
              </dl>
              <dl>
                <dt>총 배송비</dt>
                <dd>2,000원</dd>
              </dl>
              <dl>
                <dt>쿠폰</dt>
                <dd>-2,000원</dd>
              </dl>
              <dl>
                <dt>적립금</dt>
                <dd>-2,000원</dd>
              </dl>
              <div className="order-content__total">
                <dl>
                  <dt>총 결제 금액</dt>
                  <dd>-2,000원</dd>
                </dl>
              </div>
            </div>
          </ShopOrder.content>

          <ShopOrder.title>결제 수단</ShopOrder.title>
          <ShopOrder.content>
            <CustomRadio
              type="button"
              value={state.paymentMethod}
              list={paymentMethodArr}
              onCreate={this.handlePaymentMethod}
            />
          </ShopOrder.content>
        </ShopOrder>

        <div className="order-content__agree">
          <CustomCheck
            value={state.agree}
            text="위 구매조건 확인 및 개인정보 수집 및 제공에 동의합니다."
            onCreate={this.handleAgree}
          />
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

export default Order;
