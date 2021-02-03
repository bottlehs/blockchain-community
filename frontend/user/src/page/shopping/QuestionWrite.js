import React, { PureComponent } from 'react';
import PageWrap from '../../components/wrap/Page';
import NavBar from '../../components/ui/NavigationBars';
import FormWrite from '../../components/wrap/FormWrite';
import CustomRadio from '../../components/inputs/CustomRadio';
import CustomCheck from '../../components/inputs/CustomCheck';
import ButtonWrap from '../../components/wrap/ButtonWrap';
import Button from '../../components/ui/Button';
import Icon from '../../components/ui/Icon';
import PhotoAdd from '../../components/ui/PhotoAdd';

class QuestionWrite extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      qsType: 'product',
      isSecret: false,
    };
    this.handleQsType = this.handleQsType.bind(this);
    this.handleIsSecret = this.handleIsSecret.bind(this);
  }

  handleQsType(selected) {
    this.setState({
      qsType: selected.value,
    });
  }

  handleIsSecret(value) {
    this.setState({
      isSecret: value,
    });
  }

  render() {
    const { state } = this;
    const qsRadioArr = [
      { text: '상품', value: 'product' },
      { text: '배송', value: 'delivery' },
      { text: '반품/취소', value: 'cancel' },
      { text: '기타', value: 'etc' },
    ];
    return (
      <PageWrap fixed className="page-question-write">
        <PageWrap.top>
          <NavBar title="문의하기" icon="close" />
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

          <CustomRadio
            value={state.qsType}
            list={qsRadioArr}
            onCreate={this.handleQsType}
          />

          <FormWrite.content>
            <FormWrite.title>제목</FormWrite.title>
            <FormWrite.inputs>
              <input type="text" placeholder="제목을 작성해주세요." />
            </FormWrite.inputs>

            <FormWrite.title>내용</FormWrite.title>
            <FormWrite.inputs>
              <textarea rows={6} placeholder="내용을 입력해 주세요." />
            </FormWrite.inputs>

            <PhotoAdd>
              <PhotoAdd.add count={3} className="col4" />
            </PhotoAdd>

            <div className="secret">
              <CustomCheck
                value={state.isSecret}
                text="비밀글로 문의하기"
                onCreate={this.handleIsSecret}
              />
            </div>
          </FormWrite.content>

          <ButtonWrap isPadding>
            <ButtonWrap.col>
              <Button className="btBgGray" size="lg" label="취소하기" radius />
            </ButtonWrap.col>
            <ButtonWrap.col>
              <Button className="btBgMain" size="lg" label="문의하기" radius />
            </ButtonWrap.col>
          </ButtonWrap>

          <dl className="form-write__showing">
            <dt>문의 시 유의해 주세요.</dt>
            <dd>
              1. 전화번호, 이메일주소, 주소, 계좌정보 등 개인정보가 포함된 글은
              비밀글로 문의해주세요.
            </dd>
            <dd>
              2. 부적절한 게시물 등록 시 이용제한 및 게시물이 삭제될 수
              있습니다.
              <p>
                1) 전화번호, 이메일주소 등 연락처를 기재하여 할인/직거래 등을
                유도
              </p>
              <p>
                2) 비방/욕설/명예훼손, 가격비교정보, 물품과 관련 없는 광고글 등
              </p>
            </dd>
            <dd>
              3. 다만 상품에 대한 단순 불만이라는 이유로는 삭제되지 않습니다.
            </dd>
          </dl>
        </FormWrite>
      </PageWrap>
    );
  }
}

export default QuestionWrite;
