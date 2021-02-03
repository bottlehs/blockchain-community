import React, { PureComponent } from 'react';
import PageWrap from '../../components/wrap/Page';
import NavBar from '../../components/ui/NavigationBars';
import FormWrite from '../../components/wrap/FormWrite';
import ButtonWrap from '../../components/wrap/ButtonWrap';
import Button from '../../components/ui/Button';
import StarScore from '../../components/ui/StarScore';
import CustomRadio from '../../components/inputs/CustomRadio';
import Icon from '../../components/ui/Icon';
import PhotoAdd from '../../components/ui/PhotoAdd';

class CommentWrite extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rating: 2,
      satisfaction1: null,
      satisfaction2: null,
      satisfaction3: null,
    };
    this.handleStarScore = this.handleStarScore.bind(this);
    this.handleSatisfaction1 = this.handleSatisfaction1.bind(this);
    this.handleSatisfaction2 = this.handleSatisfaction2.bind(this);
    this.handleSatisfaction3 = this.handleSatisfaction3.bind(this);
  }

  handleSatisfaction1 = (obj) => {
    this.setState({
      satisfaction1: obj.value,
    });
  };

  handleSatisfaction2 = (obj) => {
    this.setState({
      satisfaction2: obj.value,
    });
  };

  handleSatisfaction3 = (obj) => {
    this.setState({
      satisfaction3: obj.value,
    });
  };

  handleStarScore(value) {
    this.setState({
      rating: value,
    });
  }

  render() {
    const { state } = this;

    const satisfactionArr1 = [
      { text: '흠...', emoji: '😃', value: 'select1' },
      { text: '보통', emoji: '🤔', value: 'select2' },
      { text: '딱 맞는<br />제품이에요', emoji: '👏', value: 'select3' },
    ];

    const satisfactionArr2 = [
      { text: '흠...', emoji: '😃', value: 'select1' },
      { text: '보통', emoji: '🤔', value: 'select2' },
      { text: '아주 도움이<br />되었어요', emoji: '👏', value: 'select3' },
    ];

    const satisfactionArr3 = [
      { text: '흠...', emoji: '😃', value: 'select1' },
      { text: '보통', emoji: '🤔', value: 'select2' },
      { text: '아주<br />간편해요', emoji: '👏', value: 'select3' },
    ];

    return (
      <PageWrap fixed className="page-comment-write">
        <PageWrap.top>
          <NavBar title="후기 작성" icon="close" />
        </PageWrap.top>

        <FormWrite>
          <FormWrite.product>
            <FormWrite.thumb>
              <img src={require('../../assets/images/temp/order.jpg')} alt="" />
            </FormWrite.thumb>
            <FormWrite.info>
              <p className="txt1">슈퍼 잔티젠 원캡슐 다이어트</p>
              <p className="txt2">
                하루 딱 한 알<br />
                신소재 원료 다이어트
              </p>
            </FormWrite.info>
          </FormWrite.product>

          <div className="write-tip">
            <Button
              className="btLineGray"
              size="sm"
              label="후기 작성 Tip"
              radius
            />
          </div>

          <StarScore
            title="프로그램은 만족하셨나요?"
            rating={state.rating}
            onCreate={this.handleStarScore}
          />

          <ul className="satisfaction">
            <li>
              <p>구입한 목적과 맞는 제품인가요?</p>
              <CustomRadio
                type="card"
                value={state.satisfaction1}
                list={satisfactionArr1}
                onCreate={this.handleSatisfaction1}
              />
            </li>
            <li>
              <p>건강관리에 도움이 되었나요?</p>
              <CustomRadio
                type="card"
                value={state.satisfaction2}
                list={satisfactionArr2}
                onCreate={this.handleSatisfaction2}
              />
            </li>
            <li>
              <p>이용하기 간편한가요?</p>
              <CustomRadio
                type="card"
                value={state.satisfaction3}
                list={satisfactionArr3}
                onCreate={this.handleSatisfaction3}
              />
            </li>
          </ul>

          <FormWrite.content>
            <FormWrite.title>제목</FormWrite.title>
            <FormWrite.inputs>
              <input
                type="text"
                placeholder="제목을 작성해 주세요.(20자 이내)"
              />
            </FormWrite.inputs>

            <FormWrite.title>
              제품에 대한 리뷰를 작성해 주세요.
              <span>(0/5000)</span>
            </FormWrite.title>
            <FormWrite.inputs>
              <textarea rows={4} placeholder="최소 30자 이상 작성해 주세요." />
            </FormWrite.inputs>

            <PhotoAdd>
              <div className="picture-text">
                <p className="txt1">
                  다해를 이용하기 전, 후 사진을 등록해주세요.
                </p>
                <p className="txt2">사진은 최대 5장까지 등록 가능합니다.</p>
                <p className="txt3">사진 등록 시 500포인트가 지급됩니다.</p>
              </div>
              <PhotoAdd.beforeAfter />
              <PhotoAdd.add count={5} className="col6" />
            </PhotoAdd>
          </FormWrite.content>

          <ButtonWrap isPadding>
            <ButtonWrap.col>
              <Button className="btBgGray" size="lg" label="취소하기" radius />
            </ButtonWrap.col>
            <ButtonWrap.col>
              <Button className="btBgMain" size="lg" label="등록하기" radius />
            </ButtonWrap.col>
          </ButtonWrap>
        </FormWrite>
      </PageWrap>
    );
  }
}

export default CommentWrite;
