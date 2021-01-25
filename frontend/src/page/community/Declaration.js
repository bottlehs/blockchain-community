import React, { PureComponent } from 'react';
import PageWrap from '../../components/wrap/Page';
import NavBar from '../../components/ui/NavigationBars';
import CustomInput from '../../components/inputs/CustomInput';
import CustomRadio from '../../components/inputs/CustomRadio';
import ButtonWrap from '../../components/wrap/ButtonWrap';
import Button from '../../components/ui/Button';

class Declaration extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      reason: { value: null, text: null },
    };
    this.handleReason = this.handleReason.bind(this);
  }

  handleReason(obj) {
    this.setState({
      reason: obj,
    });
  }

  render() {
    const { state } = this;

    const reasonArr = [
      { value: 1, text: '부적절한 홍보 게시글' },
      { value: 2, text: '음란성 또는 청소년에게 부적합한 내용' },
      { value: 3, text: '기타' },
    ];

    return (
      <PageWrap fixed className="page-declaration">
        <PageWrap.top>
          <NavBar title="신고하기" icon="close" />
        </PageWrap.top>

        <div className="declaration">
          <section className="declaration__form">
            <div className="declaration__writer">
              <span>작성자</span>
              <strong>김희선</strong>
              <em>Prime Member</em>
            </div>
            <CustomInput>
              <input
                type="text"
                placeholder="제목을 50자 내로 작성해 주세요."
                maxLength={50}
              />
              <p className="custom-input__length">(0/50)</p>
            </CustomInput>
          </section>

          <section className="declaration__reason">
            <p className="title">신고사유 선택</p>
            <p className="description">
              여러 사유에 해당되는 경우,
              <br />
              대표적인 사유 1개를 선택해 주세요.
            </p>
            <CustomRadio
              value={state.reason.value}
              list={reasonArr}
              onCreate={this.handleReason}
            />
            <CustomInput>
              <textarea rows={3} />
            </CustomInput>
          </section>

          <section className="declaration__showing">
            <dl>
              <dt>신고하기 전에 잠깐!</dt>
              <dd>
                게시글로 인해 개인(단체)이 명예훼손 피해를 입었거나
                <br />
                저작권을 침해 당한 경우에는 아래의 별도 창구를 통해
                <br />
                접수해 주시기 바랍니다.
              </dd>
              <dd>
                - 명예훼손 관련 게시중단 요청하기(정통망법 제44조의 2에 의거)
                <br />
                - 저작권 관련 게시중단 요청하기(저작권법 103조에 의거)
                <br />
                - 내 게시글(사진)을 무단도용(불펌)한 경우
                <br />
                인터넷 거래 중 피해를 입은 경우에는 경찰청
                <br />
                사이버안전국으로 신고해 주세요.
              </dd>
            </dl>
          </section>

          <ButtonWrap isPadding>
            <ButtonWrap.col>
              <Button className="btBgGray" size="lg" label="취소하기" radius />
            </ButtonWrap.col>
            <ButtonWrap.col>
              <Button className="btBgMain" size="lg" label="등록하기" radius />
            </ButtonWrap.col>
          </ButtonWrap>
        </div>
      </PageWrap>
    );
  }
}

export default Declaration;
