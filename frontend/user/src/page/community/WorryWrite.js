import React, { PureComponent } from 'react';
import PageWrap from '../../components/wrap/Page';
import NavBar from '../../components/ui/NavigationBars';
import FormWrite from '../../components/wrap/FormWrite';
import ButtonWrap from '../../components/wrap/ButtonWrap';
import Button from '../../components/ui/Button';
import CustomCheck from '../../components/inputs/CustomCheck';
import Icon from '../../components/ui/Icon';
import PhotoAdd from '../../components/ui/PhotoAdd';

class WorryWrite extends PureComponent {
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
      <PageWrap fixed className="page-candid-review">
        <PageWrap.top>
          <NavBar title="고민 말고 다해에게 물어봐!" icon="close" />
        </PageWrap.top>

        <FormWrite>
          <div className="write-tip">
            <Button
              className="btLineGray"
              size="sm"
              label="고다해 작성 Tip"
              radius
            />
          </div>

          <FormWrite.content>
            <FormWrite.title>
              제목
              <span>(0/50)</span>
            </FormWrite.title>
            <FormWrite.inputs>
              <input
                type="text"
                placeholder="제목을 50자 내로 작성해 주세요."
              />
            </FormWrite.inputs>

            <FormWrite.title>내용</FormWrite.title>
            <FormWrite.inputs>
              <textarea
                rows={7}
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
              <Button className="btBgMain" size="lg" label="등록하기" radius />
            </ButtonWrap.col>
          </ButtonWrap>
        </FormWrite>
      </PageWrap>
    );
  }
}

export default WorryWrite;
