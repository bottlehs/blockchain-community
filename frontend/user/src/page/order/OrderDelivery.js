import React, { PureComponent } from 'react';
import PageWrap from '../../components/wrap/Page';
import NavBar from '../../components/ui/NavigationBars';
import DeliveryList from '../../components/list/Delivery';
import CustomSelect from '../../components/inputs/CustomSelect';
import Icon from '../../components/ui/Icon';

class DeliveryTrackingComplete extends PureComponent {
  render() {
    const arr = [
      { id: 1, list: [{ status: 'payment-finished' }] },
      {
        id: 2,
        list: [
          { status: 'delivery-ready' },
          { status: 'delivery-ing' },
          { status: 'delivery-completed' },
        ],
      },
    ];

    const selectArr = [
      { text: '최근 3개월', value: '3M' },
      { text: '6개월', value: '6M' },
      { text: '12개월', value: '12M' },
    ];
    let selectValue = '3M';
    const handleSelect1 = (obj) => {
      selectValue = obj.value;
    };

    return (
      <PageWrap fixed className="page-order-delivery">
        <PageWrap.top>
          <NavBar title="주문배송조회" icon="close" />
        </PageWrap.top>

        <div className="delivery-state">
          <div className="delivery-state__step">
            <strong>0</strong>
            <span>결제완료</span>
          </div>
          <Icon content="arrow-right" fill="#ccc" />
          <div className="delivery-state__step">
            <strong>1</strong>
            <span>상품준비중</span>
          </div>
          <Icon content="arrow-right" fill="#ccc" />
          <div className="delivery-state__step">
            <strong>0</strong>
            <span>배송중</span>
          </div>
          <Icon content="arrow-right" fill="#ccc" />
          <div className="delivery-state__step">
            <strong>0</strong>
            <span>배송완료</span>
          </div>
        </div>

        <CustomSelect
          value={selectValue}
          list={selectArr}
          onCreate={handleSelect1}
          fixed
          placeholder="옵션을 선택해주세요."
        />

        <DeliveryList list={arr} />
      </PageWrap>
    );
  }
}

export default DeliveryTrackingComplete;
