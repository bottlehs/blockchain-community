import React, { PureComponent } from 'react';
import PageWrap from '../../components/wrap/Page';
import NavBar from '../../components/ui/NavigationBars';
import ButtonWrap from '../../components/wrap/ButtonWrap';
import Button from '../../components/ui/Button';
import ShopReviewList from '../../components/list/ShopReview';
import FaqList from '../../components/list/FAQ';
import CustomSlider from '../../components/ui/CustomSlider';
import StarScore from '../../components/ui/StarScore';
import Icon from '../../components/ui/Icon';

class ProgramDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tabSelectNum: 2,
    };
  }

  DetailContent = () => {
    const { state } = this;

    if (state.tabSelectNum === 2) {
      const arr = [{ id: 1 }, { id: 2 }, { id: 3 }];
      return (
        <div className="program-best-review">
          <Button
            className="btLineGrayM"
            size="md"
            label="후기 작성하기"
            radius
          />
          <p className="program-best-review__title">베스트 후기</p>
          <div className="program-best-review__content">
            <CustomSlider
              settings={{
                autoplay: false,
                swipeToSlide: true,
                arrows: false,
              }}
              contents={() =>
                [1, 2, 3].map((num) => (
                  <div
                    key={num.toString()}
                    className="program-best-review__slick"
                  >
                    <div>
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
                        </div>
                        <ul className="shop-review__count">
                          <li className="shop-review__count-reply">
                            <button type="button">
                              <Icon size={18} content="reply" fill="#000" /> 5
                            </button>
                          </li>
                          <li className="shop-review__count-heart">
                            <button type="button">
                              <Icon size={18} content="heart-off" fill="#000" />{' '}
                              25
                            </button>
                          </li>
                        </ul>
                      </div>
                      <StarScore rating={4} size={18} />
                      <div className="shop-review__best">
                        <ul className="shop-review__best-image">
                          <li>
                            <span>Before</span>
                            <img
                              src={require('../../assets/images/temp/img_before.jpg')}
                              alt=""
                            />
                          </li>
                          <li>
                            <span>After</span>
                            <img
                              src={require('../../assets/images/temp/img_after.jpg')}
                              alt=""
                            />
                          </li>
                        </ul>
                        <div className="shop-review__best-txt">
                          2019년 1월~ 한 달 만에 10kg감량 뒤 53kg 2019년 6월
                          27일 대학 입학 후 폭식으로 55.8kg 로 증가 종강 후 방학
                          동안 9kg 감량 현재 46.7kg
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            />
          </div>
          <ShopReviewList list={arr} moreTitle="솔직후기" />
        </div>
      );
    }
    if (state.tabSelectNum === 3) {
      const arr = [{ id: 1 }, { id: 2 }, { id: 3 }];
      return <FaqList list={arr} />;
    }
    return <div className="program-detail__content">프로그램 정보 상세</div>;
  };

  render() {
    const { state } = this;

    const tabChange = (idx) => {
      this.setState({
        tabSelectNum: idx,
      });
    };

    return (
      <PageWrap fixed className="page-program">
        <PageWrap.top>
          <NavBar title="프로그램" icon="close" />
        </PageWrap.top>

        {/* 프로그램 리스트 */}
        <section className="program-menu">
          <ul>
            <li className="active">
              <span>90일 프로그램</span>
            </li>
            <li>
              <span>120일 프로그램</span>
            </li>
            <li>
              <span>180일 프로그램</span>
            </li>
          </ul>
        </section>
        {/* 프로그램 정보 */}
        <section
          className="program-info"
          style={{
            backgroundImage: `url(${require('../../assets/images/temp/program.jpg')})`,
          }}
        >
          <p className="program-info__title">
            다해와 함께하는
            <br />
            자몽 건강관리 프로그램
          </p>
          <div className="program-info__detail">
            <div className="program-info__price">
              <em>3개월</em>
              <p>
                <strong>69,000원</strong>
                <span>120,000원</span>
              </p>
            </div>
            <div className="program-info__etc">
              <button type="button">
                <Icon size={18} content="heart-off" fill="#000" />
              </button>
              <button type="button">
                <Icon size={18} content="share" fill="#000" />
              </button>
            </div>
          </div>
          <div className="program-info__showing">
            <ul>
              <li>
                <Icon size={13} content="check" />
                자몽스무디
              </li>
              <li>
                <Icon size={13} content="check" />
                식단관리
              </li>
              <li>
                <Icon size={13} content="check" />
                다톡방 참여
              </li>
              <li>
                <Icon size={13} content="check" />
                유료 프로그램 모두 사용
              </li>
            </ul>
          </div>
          <div className="program-info__period">
            1기 수강 기간 : 2020.02.01 ~ 2020.05.31
          </div>
        </section>
        {/* 프로그램 정보들 */}
        <section className="program-detail">
          <div className="tabs">
            <ul>
              <li
                className={state.tabSelectNum === 1 ? 'active' : ''}
                onClick={() => tabChange(1)}
                role="presentation"
              >
                프로그램 정보
              </li>
              <li
                className={state.tabSelectNum === 2 ? 'active' : ''}
                onClick={() => tabChange(2)}
                role="presentation"
              >
                솔직후기
              </li>
              <li
                className={state.tabSelectNum === 3 ? 'active' : ''}
                onClick={() => tabChange(3)}
                role="presentation"
              >
                FAQ
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

        <PageWrap.bottom>
          <ButtonWrap>
            <Button
              className="btBgMain"
              size="lg"
              label="90일 프로그램 구독하기"
            />
          </ButtonWrap>
        </PageWrap.bottom>
      </PageWrap>
    );
  }
}

export default ProgramDetail;
