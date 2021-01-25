import React, { PureComponent } from 'react';
import PageWrap from '../../components/wrap/Page';
import NavBar from '../../components/ui/NavigationBars';
import ShoppingOther from '../../components/wrap/ShopOrder';
import OrderList from '../../components/list/Order';
import ButtonWrap from '../../components/wrap/ButtonWrap';
import Button from '../../components/ui/Button';

class OrderComplete extends PureComponent {
  render() {
    const arr = [
      { id: 1, options: [{ status: 'payment-finished' }] },
      {
        id: 2,
        options: [{}, {}, {}],
      },
    ];

    return (
      <PageWrap fixed className="page-order-complete">
        <PageWrap.top>
          <NavBar title="주문완료" />
        </PageWrap.top>

        <ShoppingOther>
          <OrderList list={arr} />

          <ShoppingOther.title>배송정보</ShoppingOther.title>
          <ShoppingOther.content>
            <div className="order-content">
              <dl>
                <dt>수령인</dt>
                <dd>다해</dd>
              </dl>
              <dl>
                <dt>배송지</dt>
                <dd>
                  (07321) 서울특별시 마포구 독막로 331
                  <br />
                  마스터즈타워빌딩 1301호
                </dd>
              </dl>
              <dl>
                <dt>휴대폰번호</dt>
                <dd>010-1111-2222</dd>
              </dl>
              <dl>
                <dt>배송 메모</dt>
                <dd>배송 전에 미리 연락 바랍니다.</dd>
              </dl>
            </div>
          </ShoppingOther.content>

          <ShoppingOther.title>결제 금액 정보</ShoppingOther.title>
          <ShoppingOther.content>
            <div className="order-content order-content--price">
              <p className="method">신용카드 BC(9211-****-****-****) 일시불</p>
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
          </ShoppingOther.content>
        </ShoppingOther>

        <PageWrap.bottom>
          <ButtonWrap>
            <Button className="btBgMain" size="lg" label="확인" />
          </ButtonWrap>
        </PageWrap.bottom>
      </PageWrap>
    );
  }
}

export default OrderComplete;
