import React, { PureComponent } from 'react';
import PageWrap from '../../components/wrap/Page';
import NavBar from '../../components/ui/NavigationBars';
import CustomSlider from '../../components/ui/CustomSlider';
import Icon from '../../components/ui/Icon';
import Image from '../../components/ui/Image';

class ShopMain extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isScroll: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
  }

  handleScroll = () => {
    this.setState({
      isScroll: window.scrollY > 0,
    });
  };

  render() {
    const { state } = this;

    return (
      <PageWrap
        fixed
        footFixed
        className={`page-shop-main ${!state.isScroll ? 'is-top' : ''}`}
      >
        <PageWrap.top>
          <NavBar logo={state.isScroll} icon="menu" />
        </PageWrap.top>

        <section className="main-benefits">
          <div className="main-benefits__title">
            <Image content="logo-short" dynamicStyle="point" />
            <span>만의</span>
            <strong>스마트한 멤버십 혜택!</strong>
            <p>이거 하나면 내 건강비서 다해가 다~해줘요!</p>
          </div>
          <div className="main-benefits__slider">
            <CustomSlider
              settings={{
                infinite: false,
                autoplay: true,
                autoplaySpeed: 5000,
                swipeToSlide: true,
              }}
              contents={() =>
                [1, 2, 3].map((num) => (
                  <div key={num.toString()} className="main-benefits__slick">
                    <div className="main-benefits__slick-inner">
                      <Image content="crown" dynamicStyle="active" />
                      <p className="txt1">다해 프라임 멤버십</p>
                      <p className="txt2">Dahae Prime Membership</p>
                      <p className="txt3">
                        다해의 건강비서와 함께
                        <br />
                        멤버십 회원에게만 주어지는
                        <br />더 많은 혜택을 누리세요!
                      </p>
                      <p className="txt4">
                        <button type="button">
                          자세히 보기
                          <Icon content="arrow-right" />
                        </button>
                      </p>
                    </div>
                  </div>
                ))
              }
            />
          </div>
        </section>

        <section className="main-special-price">
          <p className="sec-title">특가로 다해!</p>
          <ul className="main-special-price__list">
            <li>
              <a href="# ">
                <div
                  className="thumb"
                  style={{
                    backgroundImage: `url(${require('../../assets/images/temp/shop_special.jpg')})`,
                  }}
                />
                <div className="sale">
                  <em>15%</em>
                </div>
                <p className="txt1">시네트롤 더바디슬림 다이어트 시크릿</p>
                <p className="txt2">
                  <em>120,000원</em>
                  <span>248,000원</span>
                </p>
              </a>
            </li>
            <li>
              <a href="# ">
                <div className="thumb">
                  <img
                    src={require('../../assets/images/temp/shop_special.jpg')}
                    alt=""
                  />
                </div>
                <div className="sale">
                  <em>15%</em>
                </div>
                <p className="txt1">시네트롤 더바디슬림 다이어트 시크릿</p>
                <p className="txt2">
                  <em>120,000원</em>
                  <span>248,000원</span>
                </p>
              </a>
            </li>
          </ul>
        </section>

        <section className="main-banners">
          <a href="# ">
            <img src={require('../../assets/images/banner/shop.png')} alt="" />
          </a>
        </section>

        <section className="main-simple">
          <p className="sec-title">간편하게 다해!</p>
          <div className="main-simple__banner">
            <a href="# ">
              <img
                src={require('../../assets/images/banner/shop_simple.jpg')}
                alt=""
              />
              <p className="txt1">
                직접 하기 어렵다면
                <br />
                다해가 다해 드림!
              </p>
              <p className="txt2">
                내 몸을 위해 3분만 투자하면,
                <br />
                나도 100세 인생!
              </p>
            </a>
          </div>
        </section>

        <PageWrap.bottom>
          <NavBar type="bottom" active="f1" />
        </PageWrap.bottom>
      </PageWrap>
    );
  }
}

export default ShopMain;
