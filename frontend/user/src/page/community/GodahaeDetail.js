import React, { PureComponent } from 'react';
import PageWrap from '../../components/wrap/Page';
import NavBar from '../../components/ui/NavigationBars';
import Button from '../../components/ui/Button';
import FormWrite from '../../components/wrap/FormWrite';
import CustomCheck from '../../components/inputs/CustomCheck';
import ButtonWrap from '../../components/wrap/ButtonWrap';
import PhotoAdd from '../../components/ui/PhotoAdd';
import Icon from '../../components/ui/Icon';

class GodahaeDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      idOpen: false,
    };
    this.handleIdOpen = this.handleIdOpen.bind(this);
  }

  handleIdOpen(value) {
    this.setState({
      idOpen: value,
    });
  }

  render() {
    const { state } = this;
    return (
      <PageWrap fixed className="page-godahae-detail">
        <PageWrap.top>
          <NavBar title="고다해" icon="close" />
        </PageWrap.top>

        <section className="gdh-detail-content">
          <div className="gdh-title">운동 전, 후 맥주 섭취 질문!</div>

          <div className="gdh-text">
            안녕하세요.
            <br />
            헬스를 좋아해서 거의 매일 다니고 있는데요.
            <br />
            회사 회식 때 술을 먹는 날이 좀 있어서요.
          </div>

          <div className="gdh-hashtag">
            <span>#다이어트</span>
            <span>#식단조절</span>
            <span>#헬스</span>
          </div>

          <div className="gdh-images">
            <img src={require('../../assets/images/temp/detail2.jpg')} alt="" />
            <img src={require('../../assets/images/temp/detail2.jpg')} alt="" />
          </div>

          <div className="gdh-profile">
            <div className="gdh-profile__thumb">
              <img
                src={require('../../assets/images/temp/review2.jpg')}
                alt=""
              />
            </div>
            <div className="gdh-profile__content">
              <p className="name">김희선</p>
              <span className="rating">Prime Member</span>
            </div>
            <button type="button">신고하기</button>
          </div>
        </section>

        <FormWrite>
          <div className="answer-write-text">
            <dl>
              <dt>전지현 님, 답변해 주세요!</dt>
              <dd>
                고다해 질문에 답변을 해주시면
                <br />
                <em>100포인트</em>를 드립니다.
              </dd>
            </dl>
            <div className="write-tip">
              <Button
                className="btLineGray"
                size="sm"
                label="고다해 작성 Tip"
                radius
              />
            </div>
          </div>

          <FormWrite.content>
            <FormWrite.inputs>
              <textarea
                rows={4}
                placeholder="답변이 등록되면 수정 및 삭제가 불가능합니다.
개인정보 공개 및 노출에 주의하세요."
              />
            </FormWrite.inputs>

            <FormWrite.title>해시태그</FormWrite.title>
            <FormWrite.inputs>
              <input
                type="text"
                placeholder="#관련 태그는 최대 10개까지 작성 가능합니다."
              />
            </FormWrite.inputs>

            <PhotoAdd>
              <PhotoAdd.add count={3} className="col4" />
            </PhotoAdd>

            <div className="secret">
              <CustomCheck
                value={state.idOpen}
                text="아이디 공개"
                onCreate={this.handleIdOpen}
              />
            </div>
          </FormWrite.content>

          <ButtonWrap isPadding>
            <ButtonWrap.col>
              <Button className="btBgGray" size="lg" label="취소하기" radius />
            </ButtonWrap.col>
            <ButtonWrap.col>
              <Button className="btBgMain" size="lg" label="답변하기" radius />
            </ButtonWrap.col>
          </ButtonWrap>
        </FormWrite>

        <section className="answer-list">
          <ul>
            <li>
              <div className="gdh-profile">
                <div className="gdh-profile__thumb">
                  <img
                    src={require('../../assets/images/temp/review2.jpg')}
                    alt=""
                  />
                </div>
                <div className="gdh-profile__content">
                  <p className="title">공유 님의 답변입니다.</p>
                  <span className="rating">Prime Member</span>
                </div>
                <button type="button">신고하기</button>
              </div>
              <p className="answer-list__text">
                안녕하세요.
                <br />
                단기 다이어트 전문 셀레디터입니다.
                <br />
                단기 다이어트 후기 블로그 남겨드립니다. 한번 들어와
                <br />
                보시면 큰 도움 되실 거라 생각됩니다.
              </p>
              <div className="answer-list__images">
                <img
                  src={require('../../assets/images/temp/detail.jpg')}
                  alt=""
                />
              </div>
            </li>
            <li>
              <div className="gdh-profile">
                <div className="gdh-profile__thumb">
                  <img
                    src={require('../../assets/images/temp/review2.jpg')}
                    alt=""
                  />
                </div>
                <div className="gdh-profile__content">
                  <p className="title">공유 님의 답변입니다.</p>
                  <span className="rating">Prime Member</span>
                </div>
                <button type="button">신고하기</button>
              </div>
              <p className="answer-list__text">
                안녕하세요.
                <br />
                단기 다이어트 전문 셀레디터입니다.
                <br />
                단기 다이어트 후기 블로그 남겨드립니다. 한번 들어와
                <br />
                보시면 큰 도움 되실 거라 생각됩니다.
              </p>
            </li>
          </ul>
        </section>
      </PageWrap>
    );
  }
}

export default GodahaeDetail;
