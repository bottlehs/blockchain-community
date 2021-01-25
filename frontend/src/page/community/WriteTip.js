import React, { PureComponent } from 'react';
import PageWrap from '../../components/wrap/Page';
import NavBar from '../../components/ui/NavigationBars';

class WriteTip extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  Tip = ({ type }) => {
    let contentHtml = '';
    if (type === 'candid') {
      contentHtml = (
        <dl>
          <dt>솔직후기 작성 Tip</dt>
          <dd>
            다해를 이용한 솔직후기를 작성해 주세요.
            <br />
            작성하신 내용은 관리자가 확인 후<br />
            커뮤니티 &quot;솔직후기&quot;, 프로그램 &quot;후기&quot;에
            <br />
            선정&등록됩니다.
          </dd>
          <dd>
            후기 작성 시 <span className="point">300포인트</span>
            <br />
            사진 등록 시 <span className="point">500포인트</span>,
            <br />
            선정&등록될 경우 <span className="point">1,000포인트</span>가
            지급됩니다.
          </dd>
          <dd>
            건강관리를 함께 하는 분들과 공유되는 내용입니다.
            <br />
            본인만의 노하우와 정보를 공유해 주셔서
            <br />
            모두 함께 건강한 생활을 할 수 있도록 도움을 주세요.
            <br />
            단, 아래의 내용에 부합하는 게시물은
            <br />
            별도의 안내 없이 수정 조치 또는 자체 삭제되오니
            <br />
            작성에 유의해 주세요.
          </dd>
          <dd>
            <ul>
              <li>
                1. 과도한 노출사진, 욕설, 음담패설, 허위사실 유포, 노골적인 광고
                및 홍보, 저작권에 위배되는 글
              </li>
              <li>2. 정보성이 부족하거나 매우 간략한 후기</li>
              <li>3. 과도한 문자의 반복이나 난해한 오타가 있는 후기</li>
              <li>4. 프로그램에 맞지 않는 후기</li>
              <li>5. 부적절한 사진을 첨부한 후기</li>
              <li>6. 개인정보(연락처, 이메일 주소 등)가 포함된 후기</li>
              <li>7. 거래를 암시하는 내용이 포함된 후기</li>
              <li>8. 명예훼손, 비난, 저작권 문제를 유발할 수 있는 후기</li>
              <li>9. 질의 사항에 맞지 않는 후기</li>
              <li>10. 기타 에티켓을 위반한 후기</li>
            </ul>
          </dd>
        </dl>
      );
    }
    if (type === 'godahae') {
      contentHtml = (
        <dl>
          <dt>고다해 작성 Tip</dt>
          <dd>
            고민 말고 다해에게 물어보기 전,
            <br />
            아래의 내용을 꼭 확인하고 이용해 주세요.
          </dd>
          <dd>
            질문할 경우 <span className="point">200포인트</span>
            <br />
            답변할 경우 <span className="point">100포인트</span>가 지급됩니다.
          </dd>
          <dd>
            <ul>
              <li>
                1. 질문 내용이 길 경우 읽기 쉽도록 단락을 구분해 등록해 주세요.
              </li>
              <li>
                2. 질문이 여러가지 일 경우 질문1. 질문2. 질문3.과 같 이 요약해
                등록해 주세요.
              </li>
              <li>3. 답변이 등록되면 수정 및 삭제가 불가능합니다.</li>
              <li>
                4. 개인정보(연락처, 이메일 주소 등) 공개 및 노출에 주의 하세요.
              </li>
              <li>
                5. 과도한 노출 사진, 욕설, 음담패설, 허위사실 유포, 노골적인
                광고 및 홍보, 저작권에 위배되는 사진 또는 글은 별도의 안내 없이
                수정조치 또는 삭제 됩니다.
              </li>
              <li>
                6. 질문과 맞지 않는 답변이거나 부적절한 사진이 첨부 된 글은
                별도의 안내 없이 수정조치 또는 삭제 됩니다.
              </li>
              <li>
                7. 명예훼손, 비난, 저작권 문제를 유발할 수 있는 글은 별도의 안내
                없이 수정조치 또는 삭제 됩니다.
              </li>
              <li>
                8. 기타 에티켓을 위반한 글은 별도의 안내 없이 수정 조치 또는
                삭제 됩니다.
              </li>
            </ul>
          </dd>
        </dl>
      );
    }
    return contentHtml;
  };

  render() {
    const propsData = this.props;
    return (
      <PageWrap className="page-write-tip">
        <PageWrap.top fixed>
          <NavBar icon="close" />
        </PageWrap.top>
        <div className="write-tip-guide">
          <this.Tip type={propsData.type} />
        </div>
      </PageWrap>
    );
  }
}

export default WriteTip;
