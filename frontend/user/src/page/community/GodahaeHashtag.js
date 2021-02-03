import React, { PureComponent } from 'react';
import PageWrap from '../../components/wrap/Page';
import NavBar from '../../components/ui/NavigationBars';
import GodahaeList from '../../components/list/Godahae';

class GodahaeHashtag extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const arr = [
      {
        id: 1,
        thumb: true,
        title: '기혈차 어때요?',
        text:
          '기혈차가 다이어트 하는데 그렇게 도움된다고 하던데 맞나요?\n' +
          '물론 식이요법, 운동은 해야 되지만 기혈차랑 같이 먹으면 효과\n' +
          '도 좋고해서요.',
      },
      {
        id: 2,
        thumb: false,
        title: '방탄우유 만들기',
        text:
          '방탄두유 만들기. 대두 단백질과 mct 오일을 세 스푼, 한 스푼,\n' +
          '따뜻한 물을 숟가락으로 섞는데 잘 풀어지는 비율 좀 알려주세요\n' +
          '. 일회분 먹을 양 기준입니다.',
      },
    ];
    return (
      <PageWrap fixed className="page-godahae-hashtag">
        <PageWrap.top>
          <NavBar title="#다이어트" icon="close" />
        </PageWrap.top>

        <GodahaeList list={arr} />
      </PageWrap>
    );
  }
}

export default GodahaeHashtag;
