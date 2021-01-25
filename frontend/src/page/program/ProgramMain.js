import React, { PureComponent } from 'react';
import PageWrap from '../../components/wrap/Page';
import NavBar from '../../components/ui/NavigationBars';

class ProgramMain extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PageWrap className="page-program-main">
        <PageWrap.top fixed>
          <NavBar icon="close" />
        </PageWrap.top>

        <section className="health-secretary">
          <div className="health-secretary__title">
            <strong>건강비서 밀착마크!</strong>
            <p>
              이불 밖은 위험한 요즘,
              <br />
              다해의 건강비서가 집에서 여러분의 건강을 관리합니다.
            </p>
          </div>
          <div
            className="health-secretary__content"
            style={{
              backgroundImage: `url(${require('../../assets/images/banner/health_secretary.jpg')})`,
            }}
          >
            <p className="txt1">
              어떤 바이러스도
              <br />내 건강을 위협할 수 없어!
            </p>
            <p className="txt2">
              집 안에서도 건강비서를 통한 집중케어.
              <br />
              나갈 수 없다면 집 안에서 즐겨라!
            </p>
            <span className="txt3">집중케어 즐기기</span>
          </div>
        </section>

        <section className="health-info">
          <p className="sec-title">집중케어 프로그램</p>
          <ul className="health-info__program">
            <li
              style={{
                backgroundImage: `url(${require('../../assets/images/banner/health_program1.jpg')})`,
              }}
            >
              <p className="txt1">
                건강비서가 추천하는
                <br />
                자몽 건강관리 프로그램
              </p>
              <p className="txt2">
                자몽 스무디 · 식단관리 · 다톡방 참여 ·
                <br />
                유료 프로그램 모두 이용가능
              </p>
            </li>
            <li
              style={{
                backgroundImage: `url(${require('../../assets/images/banner/health_program2.jpg')})`,
              }}
            >
              <p className="txt1">패밀리 프라임 멤버십</p>
              <p className="txt2">
                우리가족 건강 관리도 다해 하나로!
                <br />
                건강비서 앞으로 네 식구 모두 모엿!
              </p>
            </li>
          </ul>
          <p className="sec-title">건강비서 미션</p>
          <ul className="health-info__mission">
            <li
              style={{
                backgroundImage: `url(${require('../../assets/images/banner/health_mission1.jpg')})`,
              }}
            >
              <p className="txt1">워터 챌린지</p>
              <p className="txt2">
                우리 몸에 필요한 수분
                <br />
                누가 제일 많이
                <br />
                섭취했을까?
              </p>
            </li>
            <li
              style={{
                backgroundImage: `url(${require('../../assets/images/banner/health_mission2.jpg')})`,
              }}
            >
              <p className="txt1">스쿼트 5,000 도전!</p>
              <p className="txt2">스쿼트 5,000 도전!</p>
            </li>
          </ul>
        </section>
      </PageWrap>
    );
  }
}

export default ProgramMain;
