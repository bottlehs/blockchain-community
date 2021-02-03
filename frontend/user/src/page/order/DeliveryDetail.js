import React, { PureComponent } from 'react';
import PageWrap from '../../components/wrap/Page';
import NavBar from '../../components/ui/NavigationBars';
import Image from '../../components/ui/Image';

class DeliveryDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      step: 2,
    };
  }

  render() {
    const { state } = this;
    const active = (step) => (state.step === step ? 'active' : '');
    return (
      <PageWrap fixed className="page-delivery-detail">
        <PageWrap.top>
          <NavBar title="배송 조회" back />
        </PageWrap.top>

        <section className="delivery-detail">
          <p className="delivery-detail__date">11월 27일 도착 예정</p>

          <ul className="delivery-detail__step">
            <li className={active(1)}>
              <Image content="delivery1" dynamicStyle={active(1)} />
              <p>발송준비</p>
            </li>
            <li className={active(2)}>
              <Image content="delivery2" dynamicStyle={active(2)} />
              <p>도착예정</p>
            </li>
            <li className={active(3)}>
              <Image content="delivery3" dynamicStyle={active(3)} />
              <p>배송완료</p>
            </li>
          </ul>

          <ul className="delivery-detail__info">
            <li>
              <span>배송사</span>
              <em>한진택배&nbsp;&nbsp;&nbsp;1588-1255</em>
            </li>
            <li>
              <span>운송장번호</span>
              <em>347835780035</em>
            </li>
          </ul>

          <ul className="delivery-detail__state">
            <li className="active">
              <span className="date">
                19.11.11
                <br />
                12:52
              </span>
              <span className="pos">강서화곡(대)</span>
              <span className="state">상품배송완료</span>
            </li>
            <li>
              <span className="date">
                19.11.11
                <br />
                12:52
              </span>
              <span className="pos">강서화곡(대)</span>
              <span className="state">상품배송완료</span>
            </li>
            <li>
              <span className="date">
                19.11.11
                <br />
                12:52
              </span>
              <span className="pos">강서화곡(대)</span>
              <span className="state">상품배송완료</span>
            </li>
            <li>
              <span className="date">
                19.11.11
                <br />
                12:52
              </span>
              <span className="pos">강서화곡(대)</span>
              <span className="state">상품배송완료</span>
            </li>
          </ul>
        </section>
      </PageWrap>
    );
  }
}

export default DeliveryDetail;
