import React, { PureComponent } from 'react';
import PageWrap from '../../components/wrap/Page';
import NavBar from '../../components/ui/NavigationBars';
import Calendar from '../../components/ui/Calendar';
import ButtonWrap from '../../components/wrap/ButtonWrap';
import Button from '../../components/ui/Button';
import Image from '../../components/ui/Image';
import Icon from '../../components/ui/Icon';

class ShopMain extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { state } = this;

    const arr = {
      '2020-03-30': {
        status: 'keep',
      },
      '2020-04-01': {
        status: 'out',
      },
      '2020-04-03': {
        status: 'out',
      },
      '2020-04-04': {
        status: 'keep',
      },
    };

    const handleCheck = (val) => {
      console.log(val);
    };

    return (
      <PageWrap className="page-calorie-calendar">
        <PageWrap.top fixed>
          <NavBar logo={state.isScroll} icon="close" />
        </PageWrap.top>

        <section className="calorie-calendar">
          <Calendar calorieStatus={arr} onCreate={handleCheck} />
        </section>

        <section className="calorie-detail">
          <ul className="calorie-data">
            <li>
              <div className="calorie-data__label">
                <span
                  style={{
                    backgroundImage: `url(${require('../../assets/images/tape/calorie_day.png')})`,
                  }}
                />
                <strong>21</strong>
                <em>day</em>
              </div>
              <div className="calorie-data__content">
                <span>제안 칼로리 지킨 날</span>
                <p>총 21일 / 31일 중</p>
              </div>
            </li>
            <li>
              <div className="calorie-data__label">
                <span
                  style={{
                    backgroundImage: `url(${require('../../assets/images/tape/calorie_walk.png')})`,
                  }}
                />
                <strong>1.7</strong>
                <em>kg</em>
              </div>
              <div className="calorie-data__content">
                <span
                  style={{
                    backgroundImage: `url(${require('../../assets/images/tape/calorie_walk.png')})`,
                  }}
                />
                <span>체중변화</span>
                <p>목표 체중까지 -6kg</p>
              </div>
            </li>
            <li>
              <div className="calorie-data__label">
                <span
                  style={{
                    backgroundImage: `url(${require('../../assets/images/tape/calorie_water.png')})`,
                  }}
                />
                <strong>1.7</strong>
                <em>L</em>
              </div>
              <div className="calorie-data__content">
                <span>하루 평균 섭취한 물의 양</span>
                <p>총 23일 / 31일 중</p>
              </div>
            </li>
            <li>
              <div className="calorie-data__label">
                <span
                  style={{
                    backgroundImage: `url(${require('../../assets/images/tape/calorie_weight.png')})`,
                  }}
                />
                <strong>12,510</strong>
              </div>
              <div className="calorie-data__content">
                <span>하루 평균 걸음 수</span>
                <p>총 35,215걸음 / 31일 중</p>
              </div>
            </li>
          </ul>
          <ul className="calorie-challenge">
            <li>
              <p className="calorie-challenge__title">단식 도전 횟수</p>
              <p className="calorie-challenge__label">
                <strong>12</strong>
                <em>day</em>
              </p>
              <p className="calorie-challenge__date">총 12일 / 31일 중</p>
            </li>
            <li>
              <p className="calorie-challenge__title">서비스 이용기간</p>
              <p className="calorie-challenge__label">
                <strong>30</strong>
                <em>day</em>
              </p>
              <p className="calorie-challenge__date">총 30일 / 120일 중</p>
            </li>
          </ul>
          <ButtonWrap>
            <Button
              className="btLineGrayM"
              size="md"
              label="데이터 내보내기"
              radius
            />
          </ButtonWrap>
        </section>

        <section className="calorie-banner">
          <a href="# " className="calorie-banner__box">
            <Image content="crown" />
            <p className="txt1">
              <em>다해 프라임 멤버십</em>
              <span>
                자세히 보기
                <Icon size={9} content="arrow-right" />
              </span>
            </p>
            <p className="txt2">Dahae Prime Membership</p>
            <p className="txt3">
              다해 만의 스마트한 멤버십 혜택!
              <br />
              이거 하나면 내 건강비서 다해가 다~해줘요!
            </p>
          </a>
        </section>
      </PageWrap>
    );
  }
}

export default ShopMain;
