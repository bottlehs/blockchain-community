import React, { PureComponent } from 'react';
import PageWrap from '../../components/wrap/Page';
import NavBar from '../../components/ui/NavigationBars';
import GodahaeList from '../../components/list/Godahae';
import CustomSlider from '../../components/ui/CustomSlider';
import Image from '../../components/ui/Image';

class HotCommunity extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const arr = [
      {
        id: 2,
        thumb: false,
        title: '방탄우유 만들기',
        text:
          '방탄두유 만들기. 대두 단백질과 mct 오일을 세 스푼, 한 스푼,\n' +
          '따뜻한 물을 숟가락으로 섞는데 잘 풀어지는 비율 좀 알려주세요\n' +
          '. 일회분 먹을 양 기준입니다.',
      },
      {
        id: 1,
        thumb: true,
        title: '기혈차 어때요?',
        text:
          '기혈차가 다이어트 하는데 그렇게 도움된다고 하던데 맞나요?\n' +
          '물론 식이요법, 운동은 해야 되지만 기혈차랑 같이 먹으면 효과\n' +
          '도 좋고해서요.',
      },
      {
        id: 1,
        thumb: true,
        title: '기혈차 어때요?',
        text:
          '기혈차가 다이어트 하는데 그렇게 도움된다고 하던데 맞나요?\n' +
          '물론 식이요법, 운동은 해야 되지만 기혈차랑 같이 먹으면 효과\n' +
          '도 좋고해서요.',
      },
    ];
    return (
      <PageWrap fixed footFixed className="page-hot-community">
        <PageWrap.top>
          <NavBar menu active="m1" icon="menu" />
        </PageWrap.top>

        <section className="hot-visual">
          <CustomSlider
            settings={{
              infinite: false,
              autoplay: false,
              autoplaySpeed: 5000,
              swipeToSlide: true,
              arrows: false,
            }}
            pagingType="number"
            contents={() =>
              [1, 2, 3, 4, 5].map((num) => (
                <div key={num.toString()} className="hot-visual__slick">
                  <div className="hot-visual__inner">
                    <div className="thumb hot-visual__thumb">
                      <img
                        src={require('../../assets/images/temp/hot.jpg')}
                        alt=""
                      />
                    </div>
                    <div className="hot-visual__text">
                      <p className="txt1">일상 속 다이어트의 핵심은 즐거움!</p>
                      <p className="txt2">
                        다이어트하는 사람들에게는 늘 새로운 다이어트 다짐이
                        시작되 지만, 작심삼일이 되기에 십상인데요, 왜 그럴까요?
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }
          />
        </section>

        <section className="hot-best-list">
          <ul className="hot-best-list__slider">
            {[1, 2, 3, 4, 5].map((num) => (
              <li key={num.toString()} className="hot-best-list__slick">
                <div className="hot-best-list__slick-inner">
                  <img
                    src={require('../../assets/images/temp/hot2.jpg')}
                    alt=""
                  />
                  <p className="hot-best-list__text">
                    양질의 단백질로 포만
                    <br />
                    감을 얻고 싶다면?!
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="hot-candid-review">
          <p className="sec-title">솔직후기</p>
          <ul>
            <li>
              <div className="before">
                <Image content="photo1" />
              </div>
              <div className="after">
                <Image content="photo2" />
              </div>
            </li>
            <li>
              <div className="before">
                <Image content="photo1" />
              </div>
              <div className="after">
                <Image content="photo2" />
              </div>
            </li>
          </ul>
        </section>

        <section className="hot-godahae">
          <p className="sec-title">고다해</p>
          <GodahaeList list={arr}>
            <button type="button" className="list__more">
              고다해 더보기
            </button>
          </GodahaeList>
        </section>

        <PageWrap.bottom fixed isLine>
          <NavBar type="bottom" active="f3" />
        </PageWrap.bottom>
      </PageWrap>
    );
  }
}

export default HotCommunity;
