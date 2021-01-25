import React, { PureComponent } from 'react';
import PageWrap from '../../components/wrap/Page';
import NavBar from '../../components/ui/NavigationBars';
import CustomSelect from '../../components/inputs/CustomSelect';
import Icon from '../../components/ui/Icon';

class TapeMain extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      monthWeek: '2020Y02M1W',
    };
    this.handleMonthWeek = this.handleMonthWeek.bind(this);
  }

  handleMonthWeek(obj) {
    this.setState({
      monthWeek: obj.value,
    });
  }

  render() {
    const { state } = this;

    const monthWeekArr = [
      { text: '2월 1주차 (2020.02.02~2020.02.08)', value: '2020Y02M1W' },
      { text: '2월 2주차 (2020.02.02~2020.02.08)', value: '2020Y02M2W' },
      { text: '2월 3주차 (2020.02.02~2020.02.08)', value: '2020Y02M3W' },
      { text: '2월 4주차 (2020.02.02~2020.02.08)', value: '2020Y02M4W' },
    ];

    return (
      <PageWrap className="page-tape-line">
        <PageWrap.top fixed>
          <NavBar logo={state.isScroll} icon="close" />
        </PageWrap.top>

        <section className="tape-top">
          <p className="tape-top__title">2월 2주차 건강관리</p>
          <p className="tape-top__date">(2020.02.02 ~ 2020.02.08)</p>
          <p className="tape-top__text">
            나의 작은 습관이 내 몸을 얼마나 변화시켰을까요?
            <br />한 주 동안 나 자신을 얼마나 더 사랑했는지 확인해 보아요!
          </p>
        </section>

        <section className="simple-analysis">
          <article className="simple-analysis__goal">
            <div className="simple-analysis__goal-text">
              <span className="txt1">
                <strong>50</strong>
                kg
              </span>
              <span className="txt2">/ 5월까지</span>
            </div>
            <div className="simple-analysis__goal-button">
              <p>
                <a href="# ">
                  분석결과 상세보기
                  <Icon content="arrow-right" size={14} fill="#d1d1d1" />
                </a>
              </p>
              <p>
                <a href="# ">
                  건강 분석 다시하기
                  <Icon content="arrow-right" size={14} fill="#d1d1d1" />
                </a>
              </p>
            </div>
          </article>
          <ul>
            <li>
              <span>BMI결과</span>
              <p>
                <strong>과체중</strong>
              </p>
            </li>
            <li>
              <span>소비칼로리</span>
              <p>
                <strong>1,516</strong>
                <em>kcal</em>
              </p>
            </li>
            <li>
              <span>섭취칼로리</span>
              <p>
                <strong>1,714</strong>
                <em>kcal</em>
              </p>
            </li>
            <li>
              <span>소모칼로리</span>
              <p>
                <strong>285</strong>
                <em>kcal</em>
              </p>
            </li>
          </ul>
        </section>

        <section className="diagnostic-select">
          <CustomSelect
            list={monthWeekArr}
            value={state.monthWeek}
            fixed
            onCreate={this.handleMonthWeek}
          />
        </section>

        <section className="diagnostic">
          <dl className="diagnostic__result">
            <dt className="diagnostic__result-content">
              <p className="title">진단 결과</p>
              <p className="state">
                <strong>1,300</strong>
                <span>kcal</span>
              </p>
              <p className="label">이번 주 하루 평균 섭취 칼로리</p>
              <p className="text">
                이번 주는 권장 칼로리 1,500kcal보다{' '}
                <strong>300kcal 적게</strong> 섭취하셨어요.
              </p>
            </dt>
            <dd className="diagnostic__nutrient">
              <div className="plus">
                <strong>지방, 탄수화물</strong>
                <p>
                  표준치보다
                  <br />
                  많이 섭취한 영양소
                </p>
              </div>
              <div className="minus">
                <strong>단백질, 물</strong>
                <p>
                  표준치보다
                  <br />
                  적게 섭취한 영양소
                </p>
              </div>
            </dd>
            <dd className="diagnostic__tip">
              <span className="label">Dahae Tip!</span>
              <div className="total-text good">
                <em>잘 했어요.</em>
                <p className="text">
                  규칙적으로 식사를 챙겨주신 점 칭찬합니다!
                  <br />
                  또한, 다양한 음식을 통해 고른 영양소를 섭취하려고
                  <br />한 점 너무 잘 했어요!
                </p>
              </div>
              <div className="total-text bad">
                <em>아쉬워요!</em>
                <p className="text">
                  지방과 탄수화물이 많은 삼겹살과 흰 쌀밥의
                  <br />
                  섭취량이 많은 편이 아쉽습니다. 상대적으로 섭취가
                  <br />
                  적은 단백질과 무기질의 양을 조금 늘려주세요.
                </p>
              </div>
            </dd>
          </dl>
          <dl>
            <dt className="diagnostic__content weight">
              <p className="state">
                <strong>-3</strong>
                <span>kcal</span>
              </p>
              <p className="label">이번 주 하루 평균 물 섭취량</p>
            </dt>
            <dd className="diagnostic__tip">
              <span className="label">Dahae Tip!</span>
              <p className="text">
                이번 주도 열심히 노력한 결과 <strong>54kg으로 감량</strong>
                되었어요! 하지만, 체중감량은 천천히 해야 요요가 오지 않아요~
              </p>
            </dd>
          </dl>
          <dl>
            <dt className="diagnostic__content water">
              <p className="state">
                <strong>2.3</strong>
                <span>L</span>
              </p>
              <p className="label">이번 주 하루 평균 물 섭취량</p>
            </dt>
            <dd className="diagnostic__tip">
              <span className="label">Dahae Tip!</span>
              <p className="text">
                매일 평균적으로 섭취하기로 한 물의 양보다
                <br />
                0.3L 더 섭취했어요! 짝짝!!
                <br />
                그로 인해 이번 주 물 섭취로만
                <br />약 150kcal가 소모되었을 것으로 예상됩니다.
              </p>
            </dd>
          </dl>
          <dl>
            <dt className="diagnostic__content sleep">
              <p className="state">
                <strong>850</strong>
                <span>걸음</span>
              </p>
              <p className="label">이번 주 하루 평균 걸음 수</p>
            </dt>
            <dd className="diagnostic__tip">
              <span className="label">Dahae Tip!</span>
              <p className="text">
                하루 평균 목표 걸음 수보다 150걸음을 더 걸었어요!
                <br />
                예상되는 <strong>칼로리 소모량은 약 200kcal</strong>로
                <br />
                하루 평균 소모해야 하는 칼로리에 조금 못 미치지만
                <br />
                다음주에 더 노력해봐요!
              </p>
            </dd>
          </dl>
          <dl>
            <dt className="diagnostic__content sports">
              <p className="state">
                <strong>150</strong>
                <span>분</span>
              </p>
              <p className="label">이번 주 하루 평균 운동량</p>
            </dt>
            <dd className="diagnostic__tag">
              <span>
                러닝머신 95분 <em>105kcal</em>
              </span>
              <span>
                요가 50분 <em>240kcal</em>
              </span>
              <span>
                윗몸일으키기 5분 <em>60kcal</em>
              </span>
            </dd>
            <dd className="diagnostic__tip">
              <span className="label">Dahae Tip!</span>
              <p className="text">
                운동은 고강도가 아니더라도 매일 꾸준히 하는 게
                <br />
                중요합니다. 집에서 간단히 할 수 있는 스트레칭이나
                <br />
                요가를 무리가 가지 않는 선에서 꾸준히 해보세요.
              </p>
            </dd>
          </dl>
        </section>

        <section className="tape-memo">
          <p className="tape-memo__title">메모</p>
          <ul>
            <li>
              <p className="tape-memo__date">2020.02.03 월요일</p>
              <div className="tape-memo__content">
                <span
                  className="thumb tape-memo__thumb"
                  style={{
                    backgroundImage: `url(${require('../../assets/images/temp/review2.jpg')})`,
                  }}
                />
                <p>
                  하루 종일 물만 먹었더니 너무 어지럽네 다이어트는 이렇게 하면
                  안 되는데 너무 하루 종일 물만 먹었더니 너무 어지럽네
                  다이어트는 이렇게 하면 안 되는데 너무
                </p>
              </div>
            </li>
            <li>
              <p className="tape-memo__date">2020.02.03 월요일</p>
              <div className="tape-memo__content">
                <span
                  className="thumb tape-memo__thumb"
                  style={{
                    backgroundImage: `url(${require('../../assets/images/temp/review2.jpg')})`,
                  }}
                />
                <p>
                  하루 종일 물만 먹었더니 너무 어지럽네 다이어트는 이렇게 하면
                  안 되는데 너무 하루 종일 물만 먹었더니 너무 어지럽네
                  다이어트는 이렇게 하면 안 되는데 너무
                </p>
              </div>
            </li>
            <li>
              <p className="tape-memo__date">2020.02.03 월요일</p>
              <div className="tape-memo__content">
                <p className="empty">기록한 메모가 없네요.</p>
              </div>
            </li>
            <li>
              <p className="tape-memo__date">2020.02.03 월요일</p>
              <div className="tape-memo__content">
                <p>
                  하루 종일 물만 먹었더니 너무 어지럽네 다이어트는 이렇게 하면
                  안 되는데 너무 하루 종일 물만 먹었더니 너무 어지럽네
                  다이어트는 이렇게 하면 안 되는데 너무
                </p>
              </div>
            </li>
          </ul>
          <button type="button" className="list__more">
            <Icon content="plus" size={11} />{' '}
            자세히 보기
          </button>
        </section>
      </PageWrap>
    );
  }
}

export default TapeMain;
