import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import Icon from './Icon';

class customSlider extends PureComponent {
  Arrow = ({ type, onClick }) => {
    const iconContent = type === 'next' ? 'arrow-right' : 'arrow-left';
    return (
      <span
        className={`custom-slider__arrow custom-slider__arrow-${type}`}
        onClick={onClick}
        role="presentation"
      >
        <Icon size={30} content={iconContent} fill="rgba(255,255,255,0.7)" />
      </span>
    );
  };

  AppendDots = (dots) => {
    const propsData = this.props;
    let html = '';
    if (propsData.pagingType === 'number') {
      const active = dots.filter(
        (item) => item.props.className === 'slick-active',
      )[0];
      const currentNum = active.key * 1;
      html = (
        <div className="custom-slider__paging">
          {currentNum + 1} / {dots.length}
        </div>
      );
    } else {
      html = <ul> {dots} </ul>;
    }
    return <div className="custom-slider__dots">{html}</div>;
  };

  render() {
    const propsData = this.props;
    const { settings } = propsData;
    return (
      <div className="custom-slider">
        <Slider
          {...settings}
          nextArrow={<this.Arrow type="next" onClick={propsData.onClick} />}
          prevArrow={<this.Arrow type="prev" onClick={propsData.onClick} />}
          dots
          appendDots={this.AppendDots}
        >
          {propsData.contents()}
        </Slider>
      </div>
    );
  }
}

export default customSlider;
