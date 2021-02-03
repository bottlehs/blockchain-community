import React, { PureComponent } from 'react';
import PageWrap from '../../components/wrap/Page';
import NavBar from '../../components/ui/NavigationBars';
import ButtonWrap from '../../components/wrap/ButtonWrap';
import Button from '../../components/ui/Button';
import ShopReviewList from '../../components/list/ShopReview';
import QuestionList from '../../components/list/Question';
import StarScore from '../../components/ui/StarScore';
import CustomSelect from '../../components/inputs/CustomSelect';
import Quantity from '../../components/ui/Quantity';
import ModalPopup from '../../components/wrap/Popup';
import Icon from '../../components/ui/Icon';

class Detail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tabSelectNum: 2,
      averageActive: false,
      option: {},
      isButtonFixed: false,
      optionOpened: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
  }

  handleScroll = () => {
    const { state } = this;
    const ele = document.querySelector('.prd-basic .button__outbox');
    const isButtonFixed = !(ele.offsetHeight + ele.offsetTop > window.scrollY);
    const optionOpened = state.optionOpened && isButtonFixed;
    this.setState({
      optionOpened,
      isButtonFixed,
    });
  };

  handleOptionOpened = (val) => {
    this.setState({
      optionOpened: val,
    });
  };

  DetailContent = () => {
    const { state } = this;
    const Emoji = (props) => (
      <span className="emoji" role="img">
        {props.symbol}
      </span>
    );
    const Progress = (props) => (
      <li className={props.className}>
        <p className="label">
          {props.label}
          {props.symbol ? <Emoji symbol={props.symbol} /> : ''}
        </p>
        <div className="bar">
          <span style={{ width: props.percent }} />
        </div>
        <em className="percent">{props.percent}</em>
      </li>
    );

    if (state.tabSelectNum === 2) {
      const arr = [{ id: 1 }, { id: 2 }, { id: 3 }];
      const averageDetail = () => {
        this.setState({
          averageActive: !state.averageActive,
        });
      };
      return (
        <div className="detail-review">
          <ButtonWrap>
            <Button
              className="btLineGrayM"
              size="md"
              label="후기 작성하기"
              radius
            />
          </ButtonWrap>
          <div className="average">
            <div className="average__total">
              <div className="average__total-star">
                <p>
                  <span className="label">평균별점</span>
                  <strong className="score">4.1</strong>
                </p>
                <StarScore rating={4} size={15} />
              </div>
              <div className="average__total-status">
                <ul className="average__progress">
                  <Progress label="5점" percent="90%" />
                  <Progress label="4점" percent="40%" />
                  <Progress label="3점" percent="0%" />
                  <Progress label="2점" percent="0%" />
                  <Progress label="1점" percent="0%" />
                </ul>
              </div>
            </div>
            <div
              className={`average__item ${state.averageActive ? 'active' : ''}`}
            >
              <button
                type="button"
                className="average__item-button"
                onClick={() => averageDetail()}
              >
                {state.averageActive ? '접기' : '자세히'}
                <Icon
                  content={`arrow-${state.averageActive ? 'up' : 'down'}`}
                  size={15}
                  fill="#d1d1d1"
                />
              </button>
              <dl>
                <dt>
                  <em>피부진정</em>
                  <strong>90%</strong>
                  <span>
                    흠...
                    <Emoji symbol="🤔" />
                  </span>
                </dt>
                <dd>
                  <ul className="average__progress">
                    <Progress
                      className="top"
                      label="흠..."
                      symbol="🤔"
                      percent="90%"
                    />
                    <Progress label="보통..." symbol="😀" percent="6%" />
                    <Progress
                      label="진정에 탁월해요"
                      symbol="👏"
                      percent="4%"
                    />
                  </ul>
                </dd>
                <dt>
                  <em>촉촉함</em>
                  <strong>82%</strong>
                  <span>
                    촉촉해요
                    <Emoji symbol="👏" />
                  </span>
                </dt>
                <dd>
                  <ul className="average__progress">
                    <Progress label="흠..." symbol="🤔" percent="12%" />
                    <Progress label="보통..." symbol="😀" percent="10%" />
                    <Progress
                      className="top"
                      label="촉촉해요"
                      symbol="👏"
                      percent="82%"
                    />
                  </ul>
                </dd>
                <dt>
                  <em>세정력</em>
                  <strong>65%</strong>
                  <span>
                    아주 만족해요
                    <Emoji symbol="👏" />
                  </span>
                </dt>
                <dd>
                  <ul className="average__progress">
                    <Progress label="흠..." symbol="🤔" percent="15%" />
                    <Progress label="보통..." symbol="😀" percent="20%" />
                    <Progress
                      className="top"
                      label="아주 만족해요"
                      symbol="👏"
                      percent="65%"
                    />
                  </ul>
                </dd>
              </dl>
            </div>
          </div>
          <ShopReviewList list={arr} moreTitle="솔직후기" />
        </div>
      );
    }
    if (state.tabSelectNum === 3) {
      const arr = [
        {
          id: 1,
          answerState: 'ing',
          title: '구독 프로그램 결제는 어떻게 하나요?',
          question:
            '구독 프로그램을 결제하려고 하는데 결제창이 보이지 않습니다. 어떻게 해야 결제 프로그램이 보일까요?',
          questionDate: '2020.7.5',
          answer:
            '안녕하세요 회원님. 문의주신 결제 프로그램은 현재 구독이 종료된 프로그램이라 결제가 불가능 합니다. 3월 중 오픈 하는 프로그램을 이용해 주세요. 감사합니다.',
          answerDate: '2020.01.04 16:24',
        },
        {
          id: 2,
          answerState: 'complete',
          title: '구독 프로그램 결제는 어떻게 하나요?',
          question:
            '구독 프로그램을 결제하려고 하는데 결제창이 보이지 않습니다. 어떻게 해야 결제 프로그램이 보일까요?',
          questionDate: '2020.7.5',
          answer:
            '안녕하세요 회원님. 문의주신 결제 프로그램은 현재 구독이 종료된 프로그램이라 결제가 불가능 합니다. 3월 중 오픈 하는 프로그램을 이용해 주세요. 감사합니다.',
          answerDate: '2020.01.04 16:24',
        },
        {
          id: 3,
          answerState: 'complete',
          secret: true,
          title: '구독 프로그램 결제는 어떻게 하나요?',
          question:
            '구독 프로그램을 결제하려고 하는데 결제창이 보이지 않습니다. 어떻게 해야 결제 프로그램이 보일까요?',
          questionDate: '2020.7.5',
          answer:
            '안녕하세요 회원님. 문의주신 결제 프로그램은 현재 구독이 종료된 프로그램이라 결제가 불가능 합니다. 3월 중 오픈 하는 프로그램을 이용해 주세요. 감사합니다.',
          answerDate: '2020.01.04 16:24',
        },
      ];
      return (
        <div className="detail-question">
          <ButtonWrap>
            <Button className="btLineGrayM" size="md" label="문의하기" radius />
          </ButtonWrap>
          <QuestionList list={arr} isMore />
        </div>
      );
    }
    if (state.tabSelectNum === 4) {
      return (
        <div className="detail-delivery-info">
          <dl>
            <dt>주문/배송 정보</dt>
            <dd>
              <p>- 배송방법 : 다신 배송 (묶음 배송 가능)</p>
              <p>- 택배사 : 롯데택배 / CJ 택배</p>
              <p>- 배송비용 : 3,000원 (3만원이상 구매시 무료배송)</p>
              <p>
                - 배송지역 : 전국 (도서 산간 지역 및 제주도 추가 배송료 발생)
              </p>
              <p>
                - 출고시간 : 평일 오후 4시 이전 결제시 당일 발송
                <br />
                (주말 및 공휴일 배송 불가)
              </p>
              <p>- 배송기간 : 평균 1~2일</p>
            </dd>
            <dt>교환/반품 정보</dt>
            <dd>
              <em>[교환 및 반품 접수 방법]</em>
              <p>
                - 상품 수령 7일 이내 1:1 문의게시판 및 전화상담을 통하여
                접수해주세요.
              </p>
              <p>
                - 받으신 제품에 문제가 있는 경우, 증빙 사진이 꼭 있어야 접수
                가능합니다 (택배박스, 송장, 제품사진포함 3장 이상)
              </p>
              <p>
                - 단순 변심에 의한 교환, 반품시 왕복 배송료 6,000원이 발생됩
                니다.(상품 하자시 배송비 무료)
              </p>
              <em>[교환 및 반품 처리가 불가한 경우]</em>
              <p>
                - 신선식품, 냉동식품, 터지기 쉬운 제품은 변심에 의한 교환, 반품
                불가
              </p>
              <p>- 고객님 관리 부주의로 인해 상품 포장 훼손 및 오염된 경우</p>
              <p>
                - 배송정보를 잘못 입력하여 반송, 배송지연 등에 의해 제품이 훼손
                및 오염된 경우 (신선/냉동식품은 재발송 불가)
              </p>
              <p>- 수령일로부터 교환, 반품 가능 기간 (7일)이 경과된 경우</p>
              <p>
                - 구매확정(자동 구매확정 포함) 이후에는 제품의 오배송,교환,
                환불, 반품 불가
              </p>
            </dd>
            <dt>환불 정보</dt>
            <dd>
              <p>① 교환/반품은 배송완료후 7일 이내에만 요청 가능합니다.</p>
              <p>
                ② 결제하신 금액의 환불은 반품할 상품이 입고된 후, 7영업일 이내에
                처리됩니다.
              </p>
              <p>
                ③ 쿠폰이나 적립금으로 결제하신 경우, 주문취소 또는 반품 요청시
                할인받으신 금액을 제외하고 환불처리됩니다.{' '}
              </p>
              <p>
                ④ 무통장입금(가상계좌)으로 결제하셨거나, 계좌로 환불처리 되는
                경우에는 주문자 본인 계좌로만 환불처리됩니다.{' '}
              </p>
              <p>
                ⑤ 신용카드, 휴대폰, 실시간계좌이체를 통해 결제하신 경우 승인을
                취소하여 결제 대금이 청구되지 않게 합니다.
                <br />
                (신용카드나 휴대폰은 결제일자에 따라 대금이 청구될 수 있으며,
                익월 대금 청구시 카드사에서 환급처리 됩니다.)
              </p>
            </dd>
          </dl>
        </div>
      );
    }
    return <div className="detail-contents">상세</div>;
  };

  render() {
    const { state } = this;

    const tabChange = (idx) => {
      this.setState({
        tabSelectNum: idx,
      });
    };

    const selectedOption = (obj) => {
      this.setState({
        option: obj,
      });
    };

    const optionOpened = () => {
      this.setState({
        optionOpened: true,
      });
    };

    const optionsArr = [
      { text: '선택1', value: '1' },
      { text: '선택2', value: '2' },
      { text: '선택3', value: '3' },
      { text: '선택4', value: '4' },
    ];

    return (
      <PageWrap footFixed={state.isButtonFixed} className="page-shop-detail">
        <PageWrap.top fixed>
          <NavBar back />
        </PageWrap.top>
        {/* 프로그램 정보 */}
        <section className="product-info">
          <div className="prd-thumb">
            <img src={require('../../assets/images/temp/detail.jpg')} alt="" />
          </div>
          <div className="prd-basic">
            <p className="prd-basic__txt">
              동물성 식물성 단백질 함유 닭가슴살 쉐이크 1박스
            </p>
            <p className="prd-basic__title">슈퍼 잔티젠 원캡슐 다이어트</p>
            <div className="prd-basic__detail">
              <div className="price">
                <strong>288,000원</strong>
                <span>350,000원</span>
              </div>
              <div className="etc">
                <button type="button">
                  <Icon size={18} content="heart-off" fill="#000" />
                </button>
                <button type="button">
                  <Icon size={18} content="share" fill="#000" />
                </button>
              </div>
            </div>
            <ul className="prd-basic__showing">
              <li>
                <span>용량, 수량</span>
                <p>190ml, 20팩</p>
              </li>
              <li>
                <span>도착예정일</span>
                <p>1~3일 소요 예정</p>
              </li>
              <li>
                <span>적립금</span>
                <p>200p</p>
              </li>
            </ul>
            <div className="prd-basic__options">
              <CustomSelect
                list={optionsArr}
                value={state.option.value}
                placeholder="옵션을 선택해 주세요."
                onCreate={selectedOption}
              />
            </div>
            <div className="selected-option">
              <ul className="selected-option__list">
                <li>
                  <p className="option-name">쑥 선식 10개입</p>
                  <Quantity />
                  <div className="delete">
                    <Icon size={12} content="close" fill="#acacac" />
                  </div>
                </li>
                <li>
                  <p className="option-name">
                    다해 아침 7일 패키지 (과일야채 5개 + 곡물 2개)
                  </p>
                  <Quantity />
                  <div className="delete">
                    <Icon size={12} content="close" fill="#acacac" />
                  </div>
                </li>
              </ul>
              <div className="selected-option__price">
                <span>총 주문금액</span>
                <strong>70,000원</strong>
              </div>
            </div>
            <ButtonWrap isPadding>
              <ButtonWrap.col>
                <Button
                  className="btBgMain"
                  size="lg"
                  label="장바구니"
                  radius
                />
              </ButtonWrap.col>
              <ButtonWrap.col>
                <Button
                  className="btBgMain"
                  size="lg"
                  label="등록하기"
                  radius
                />
              </ButtonWrap.col>
            </ButtonWrap>
          </div>
        </section>
        {/* 프로그램 정보들 */}
        <section className="product-detail">
          <div className="tabs">
            <ul>
              <li
                className={state.tabSelectNum === 1 ? 'active' : ''}
                onClick={() => tabChange(1)}
                role="presentation"
              >
                상세정보
              </li>
              <li
                className={state.tabSelectNum === 2 ? 'active' : ''}
                onClick={() => tabChange(2)}
                role="presentation"
              >
                후기
              </li>
              <li
                className={state.tabSelectNum === 3 ? 'active' : ''}
                onClick={() => tabChange(3)}
                role="presentation"
              >
                문의하기
              </li>
              <li
                className={state.tabSelectNum === 4 ? 'active' : ''}
                onClick={() => tabChange(4)}
                role="presentation"
              >
                배송정보
              </li>
            </ul>
          </div>
          <this.DetailContent />
        </section>

        <div className="floating-top">
          <button type="button" className="icon-top">
            <Icon size={21} content="up" />
          </button>
        </div>

        <ModalPopup
          opened={state.optionOpened}
          className="modal-product-options"
          onCreate={this.handleOptionOpened}
        >
          <div className="prd-basic__options">
            <CustomSelect
              list={optionsArr}
              value={state.option.value}
              placeholder="옵션을 선택해 주세요."
              onCreate={selectedOption}
            />
          </div>
          <div className="selected-option">
            <ul className="selected-option__list">
              <li>
                <p className="option-name">쑥 선식 10개입</p>
                <Quantity />
                <div className="delete">
                  <Icon size={12} content="close" fill="#acacac" />
                </div>
              </li>
              <li>
                <p className="option-name">
                  다해 아침 7일 패키지 (과일야채 5개 + 곡물 2개)
                </p>
                <Quantity />
                <div className="delete">
                  <Icon size={12} content="close" fill="#acacac" />
                </div>
              </li>
              <li>
                <p className="option-name">쑥 선식 10개입</p>
                <Quantity />
                <div className="delete">
                  <Icon size={12} content="close" fill="#acacac" />
                </div>
              </li>
              <li>
                <p className="option-name">
                  다해 아침 7일 패키지 (과일야채 5개 + 곡물 2개)
                </p>
                <Quantity />
                <div className="delete">
                  <Icon size={12} content="close" fill="#acacac" />
                </div>
              </li>
            </ul>
            <div className="selected-option__price">
              <span>총 주문금액</span>
              <strong>70,000원</strong>
            </div>
          </div>
        </ModalPopup>

        <PageWrap.bottom>
          <ButtonWrap>
            <ButtonWrap.col>
              <Button
                className="btBgMain"
                size="lg"
                label="장바구니"
                onClick={() => optionOpened()}
              />
            </ButtonWrap.col>
            <ButtonWrap.col>
              <Button
                className="btBgMain"
                size="lg"
                label="구매하기"
                onClick={() => optionOpened()}
              />
            </ButtonWrap.col>
          </ButtonWrap>
        </PageWrap.bottom>
      </PageWrap>
    );
  }
}

export default Detail;
