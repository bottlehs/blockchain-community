import React, { PureComponent } from 'react';
import Icon from './Icon';

class StarScore extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rating: props.rating || null,
    };
  }

  rate(rating) {
    this.setState({
      rating,
    });
    const data = this.props;
    data.onCreate(rating);
  }

  render() {
    const { state } = this;
    const propsData = this.props;
    const stars = [];
    let starText = '';
    const startsText = [
      '매우 불만족',
      '불만족',
      '보통',
      '만족해요',
      '매우 만족해요',
    ]

    let returnHtml = '';
    if (propsData.onCreate) {
      for (let i = 1; i <= 5; i += 1) {
        let fill = '#d1d1d1';
        let content = 'star-line';

        if (state.rating >= i && state.rating != null) {
          fill = '#AD35CF';
          content = 'star';
        }

        if (state.rating === i) {
          starText = <span>{startsText[i - 1]}</span>;
        }

        stars.push(
          <button
            key={i.toString()}
            type="button"
            onClick={this.rate.bind(this, i)}
          >
            <Icon size={31} content={content} fill={fill} />
          </button>,
        );
      }
      returnHtml = (
        <div className="star-score__box">
          <p className="star-score__title">{propsData.title}</p>
          <div className="star-score__rating">{stars}</div>
          <p className="star-score__text">{starText}</p>
        </div>
      );
    } else {
      const items = [];
      for (let i = 1; i <= 5; i += 1) {
        items.push(
          <Icon
            key={i.toString()}
            size={propsData.size ? propsData.size : 15}
            content="star"
            dynamicClass={i <= propsData.rating ? 'on' : 'off'}
            fill={i <= propsData.rating ? '#AD35CF' : '#ccc'}
          />,
        );
      }
      returnHtml = <div className="star-score">{items}</div>;
    }

    return returnHtml;
  }
}

export default StarScore;
