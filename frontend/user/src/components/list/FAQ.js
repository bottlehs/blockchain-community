import React, { PureComponent } from 'react';
import Icon from '../ui/Icon';

class FaqList extends PureComponent {
  render() {
    const info = this.props;
    return (
      <div className="faq-list">
        <FaqListRows rows={info.list} />
      </div>
    );
  }
}

class FaqListRows extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      current: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(num) {
    const { state } = this;
    const checkNum = state.current;
    this.setState({
      current: checkNum === num ? null : num,
    });
  }

  render() {
    const { state } = this;
    const data = this.props;
    if (data.rows.length === 0) {
      return <div className="list__empty">없습니다.</div>;
    }
    return (
      <ul>
        {data.rows.map((item, index) => (
          <li
            key={index.toString()}
            className={`faq-list__item ${
              state.current === index ? 'active' : ''
            }`}
            onClick={() => this.handleClick(index)}
            role="presentation"
          >
            <div className="faq-list__title">
              정기적 건강관리와 일반적 건강관리의 차이가 무엇인가요?
              <Icon size={15} content="arrow-down" fill="#d1d1d1" />
            </div>
            <div className="faq-list__answer">
              <div className="faq-list__answer-inner">
                약국이나 건강식품 매장뿐 아니라 인터넷 쇼핑몰, 대 형 유통매장
                등에서도 우리는 건강에 관한 수많은 제 품들을 손쉽게 구입할 수
                있습니다. 따라서 어떤 제품 을 어떻게 선택해야 할지 고민이
                필요합니다. 이번 장 에서는 건강기능식품에 대해서 올바르게
                이해하고 지 혜롭게 선택할 수 있는 방법에 대해 알아보겠습니다.
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default FaqList;
