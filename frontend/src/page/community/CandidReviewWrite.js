import React, { PureComponent } from 'react';
import PageWrap from '../../components/wrap/Page';
import NavBar from '../../components/ui/NavigationBars';
import FormWrite from '../../components/wrap/FormWrite';
import ButtonWrap from '../../components/wrap/ButtonWrap';
import Button from '../../components/ui/Button';
import StarScore from '../../components/ui/StarScore';
import CustomSelect from '../../components/inputs/CustomSelect';
import Icon from '../../components/ui/Icon';
import PhotoAdd from '../../components/ui/PhotoAdd';

class CandidReviewWrite extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rating: 2,
      program: null,
    };
    this.handleStarScore = this.handleStarScore.bind(this);
    this.handleProgram = this.handleProgram.bind(this);
  }

  handleStarScore(value) {
    this.setState({
      rating: value,
    });
  }

  handleProgram(obj) {
    this.setState({
      program: obj.value,
    });
  }

  render() {
    const { state } = this;

    const deliveryMemoArr = [
      { text: '다이어트 프로그램1', value: 1 },
      { text: '다이어트 프로그램2', value: 1 },
      { text: '다이어트 프로그램3', value: 1 },
      { text: '다이어트 프로그램4', value: 1 },
      { text: '다이어트 프로그램5', value: 1 },
      { text: '다이어트 프로그램6', value: 1 },
    ];

    return (
      <PageWrap fixed className="page-candid-review">
        <PageWrap.top>
          <NavBar title="솔직후기 작성" icon="close" />
        </PageWrap.top>

        <FormWrite>
          <div className="write-tip">
            <Button
              className="btLineGray"
              size="sm"
              label="솔직후기 작성 Tip"
              radius
            />
          </div>

          <FormWrite.content>
            <FormWrite.title>프로그램</FormWrite.title>
            <FormWrite.inputs>
              <CustomSelect
                list={deliveryMemoArr}
                value={state.program}
                placeholder="다해에서 구매한 프로그램을 선택해 주세요."
                fixed
                onCreate={this.handleProgram}
              />
            </FormWrite.inputs>
          </FormWrite.content>

          <StarScore
            title="프로그램은 만족하셨나요?"
            rating={state.rating}
            onCreate={this.handleStarScore}
          />

          <FormWrite.content>
            <FormWrite.title>제목</FormWrite.title>
            <FormWrite.inputs>
              <input
                type="text"
                placeholder="제목을 작성해 주세요.(20자 이내)"
              />
            </FormWrite.inputs>

            <FormWrite.title>
              다해와 함께 하기 전 내 생활패턴은 어땠나요?
              <span>(0/30)</span>
            </FormWrite.title>
            <FormWrite.inputs>
              <textarea rows={4} placeholder="최소 20자 이상 작성해 주세요." />
            </FormWrite.inputs>

            <FormWrite.title>
              체중 감량을 결심한 이유가 궁금해요.
              <span>(0/200)</span>
            </FormWrite.title>
            <FormWrite.inputs>
              <textarea rows={4} placeholder="최소 70자 이상 작성해 주세요." />
            </FormWrite.inputs>

            <FormWrite.title>
              최종적으로 어떤 목표에 도달하고 싶었나요?
              <span>(0/200)</span>
            </FormWrite.title>
            <FormWrite.inputs>
              <textarea rows={4} placeholder="최소 70자 이상 작성해 주세요." />
            </FormWrite.inputs>

            <FormWrite.title>
              목표에 도달하기 위해 어떻게 노력했으며, 다해와 함께한 결과는
              어땠나요?
              <span>(0/200)</span>
            </FormWrite.title>
            <FormWrite.inputs>
              <textarea rows={4} placeholder="최소 70자 이상 작성해 주세요." />
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
              <PhotoAdd.add count={3} className="col4" />
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

export default CandidReviewWrite;
