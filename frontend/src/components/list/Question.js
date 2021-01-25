import React, { PureComponent } from 'react';
import Icon from '../ui/Icon';

class QuestionList extends PureComponent {
  render() {
    const propsData = this.props;
    return (
      <div className="question-list">
        <QuestionRows rows={propsData.list} />
        {propsData.isMore ? (
          <button type="button" className="list__more">
            문의 더보기
          </button>
        ) : (
          ''
        )}
      </div>
    );
  }
}

class QuestionRows extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      current: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  itemTitle = ({ title, secret, question }) => {
    let secretIcon;
    let detail;
    if (secret) {
      secretIcon = <Icon size={22} content="lock" fill="#000" />;
    } else {
      detail = question;
    }
    return (
      <div className="question-list__query">
        <div className="question-list__query-title">
          {secretIcon}
          {secret ? '비밀글입니다.' : title}
        </div>
        <div className="question-list__query-text">
          {secret ? '비밀글입니다.' : detail}
        </div>
      </div>
    );
  };

  itemStatus = ({ answerState, secret, date }) => {
    const check = answerState === 'complete';
    const dateHtml = !secret ? <span className="date">{date}</span> : '';
    return (
      <div className="question-list__status">
        <em className={`${check ? 'state-complete' : 'state-ing'}`}>
          {check ? '답변완료' : '답변중'}
        </em>
        {dateHtml}
      </div>
    );
  };

  itemContent = ({ data }) => {
    if (data.secret || (!data.secret && data.answerState !== 'complete')) {
      return null;
    }
    return (
      <div className="question-list__answer">
        <ul className="question-list__answer-thumb">
          <li>
            <span
              style={{
                backgroundImage: `url(${require('../../assets/images/temp/question.png')})`,
              }}
            />
          </li>
          <li>
            <span
              style={{
                backgroundImage: `url(${require('../../assets/images/temp/question.png')})`,
              }}
            />
          </li>
          <li>
            <span
              style={{
                backgroundImage: `url(${require('../../assets/images/temp/question.png')})`,
              }}
            />
          </li>
        </ul>
        <div className="question-list__answer-inner">
          <p className="question-list__answer-title">
            문의주신 내용에 대해 답변 드립니다.
          </p>
          <div className="question-list__answer-text">{data.answer}</div>
          <p className="question-list__answer-date">{data.answerDate}</p>
        </div>
      </div>
    );
  };

  handleClick(item, num) {
    if (!item.secret && item.answerState === 'complete') {
      const { state } = this;
      const checkNum = state.current;
      this.setState({
        current: checkNum === num ? null : num,
      });
    }
  }

  render() {
    const { state } = this;
    const propsData = this.props;
    if (propsData.rows.length === 0) {
      return <div className="list__empty">없습니다.</div>;
    }
    return (
      <ul>
        {propsData.rows.map((item, index) => (
          <li
            key={index.toString()}
            className={`question-list__item ${
              state.current === index ? 'active' : ''
            } ${item.secret ? 'secret' : ''}`}
          >
            <div
              onClick={() => this.handleClick(item, index)}
              role="presentation"
            >
              <this.itemTitle
                title={item.title}
                question={item.question}
                secret={item.secret}
              />
              <this.itemStatus
                answerState={item.answerState}
                secret={item.secret}
                date={item.questionDate}
              />
            </div>
            <this.itemContent data={item} />
          </li>
        ))}
      </ul>
    );
  }
}

export default QuestionList;
