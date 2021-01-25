import React, { PureComponent } from 'react';
import PageWrap from '../../components/wrap/Page';
import NavBar from '../../components/ui/NavigationBars';
import CandidReviewList from '../../components/list/CandidReview';
import Icon from '../../components/ui/Icon';

class GodahaeCandidReview extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isScroll: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
  }

  handleScroll = () => {
    this.setState({
      isScroll: window.scrollY > 0,
    });
  };

  render() {
    const { state } = this;
    const arr = [
      { id: 1 },
      { id: 2 },
      { id: 1 },
      { id: 2 },
      { id: 1 },
      { id: 2 },
      { id: 2 },
      { id: 1 },
      { id: 2 },
    ];
    return (
      <PageWrap
        fixed
        footFixed
        className={`page-godahae-candid ${!state.isScroll ? 'is-top' : ''}`}
      >
        <PageWrap.top>
          <NavBar menu active="m2" icon="menu" />
        </PageWrap.top>

        <CandidReviewList list={arr} best />

        <button type="button" className="floating-write">
          <Icon dynamicClass="icon-write" size={45} content="write" />
        </button>

        <PageWrap.bottom fixed isLine>
          <NavBar type="bottom" active="f3" />
        </PageWrap.bottom>
      </PageWrap>
    );
  }
}

export default GodahaeCandidReview;
