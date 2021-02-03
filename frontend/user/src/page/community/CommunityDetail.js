import React, { PureComponent } from 'react';
import PageWrap from '../../components/wrap/Page';
import NavBar from '../../components/ui/NavigationBars';
import StarScore from '../../components/ui/StarScore';
import CommentList from '../../components/list/Comment';
import ModalPopup from '../../components/wrap/Popup';
import Icon from '../../components/ui/Icon';

class CommunityDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      commentFocus: false,
      shareOpened: false,
      commentLength: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
  }

  handleShareOpened = (val) => {
    this.setState({
      shareOpened: val,
    });
  };

  handleScroll = () => {
    this.setState({
      isScroll: window.scrollY > 0,
    });
  };

  render() {
    const { state } = this;

    const commentListArr = [
      {
        text: '정말 대단하세요~',
        reply: false,
        heart: true,
      },
      {
        text: '',
        reply: false,
        heart: false,
      },
      {
        text: '',
        reply: true,
        heart: false,
      },
    ];

    const onFocus = () => {
      this.setState({
        commentFocus: true,
      });
    };
    const onBlur = () => {
      this.setState({
        commentFocus: false,
      });
    };

    const onKeyUp = (e) => {
      this.setState({
        commentLength: e.target.value.length,
      });
    }

    const shareOpen = () => {
      this.setState({
        shareOpened: true,
      });
    };

    return (
      <PageWrap
        fixed
        className={`page-community-detail ${!state.isScroll ? 'is-top' : ''}`}
      >
        <PageWrap.top>
          <NavBar title="김희선 님의 솔직후기" back />
        </PageWrap.top>

        <section className="community-detail-visual">
          <ul>
            <li
              style={{
                backgroundImage: `url(${require('../../assets/images/temp/img_before.jpg')})`,
              }}
            />
            <li
              style={{
                backgroundImage: `url(${require('../../assets/images/temp/img_after.jpg')})`,
              }}
            />
          </ul>
          <div className="info">
            김희선 님의 솔직후기
            <StarScore rating={5} size={15} />
          </div>
          <p className="title">
            내 얼굴은 팬케이크처럼 보였고 내 몸은 더 이상 모양이 없었습니다.
          </p>
        </section>

        <section className="community-detail">
          <div className="community-detail__content">
            <p>
              나는 삶의 질을 향상시키고 다시 운동 할 수 있기를 원했 습니다.
              또한, 나는 다시 자신을 좋아하고 건강에 좋은 일을 하고 싶었습니다!
            </p>
            <dl>
              <dt>왜 체중을 줄이려고 했습니까?</dt>
              <dd>
                나는 내가 좋아하는 옷에 맞지 않았고, 가장 숨기고 감추 는 옷만
                구입했다. 나는 친구와 내 파트너 주변에서 불편 함을 느꼈고,
                사람들이 나를 보고 있는 것처럼 느꼈고, 신체 접촉을 피하고 자신이
                마음에 들지 않는 경우가 많 았습니다.
              </dd>
              <dt>어떤 목표에 도달하고 싶습니까?</dt>
              <dd>
                내 목표는 다시 내 관계에서 더 행복하고 옷을 다시 쇼핑 하는 것을
                즐겼습니다. 또한 친구 나 가족과 함께 활동 (수영, 실내 암벽 등반
                등)을 하고 더 이상 변명 할 필요 가 없었습니다.
              </dd>
            </dl>
          </div>
          <div className="community-detail__images">
            <img src={require('../../assets/images/temp/detail2.jpg')} alt="" />
            <img src={require('../../assets/images/temp/detail2.jpg')} alt="" />
            <img src={require('../../assets/images/temp/detail2.jpg')} alt="" />
          </div>
          <div className="community-detail__button">
            <a href="# ">목록</a>
          </div>
        </section>

        <section className="community-detail-comment">
          <p className="title">
            <em>댓글</em>
            <span>102</span>
          </p>
          <CommentList list={commentListArr} />
        </section>
        <section
          className={`comment-write short ${
            state.commentFocus ? 'focus' : ''
          } ${state.commentLength > 0 ? 'is-text' : ''}`}
        >
          <div className="comment-write__inner">
            <div className="comment-write__input">
              <input
                type="text"
                placeholder="댓글쓰기"
                onKeyUp={onKeyUp}
                onFocus={onFocus}
                onBlur={onBlur}
              />
              <button type="button">등록</button>
            </div>
            <div className="comment-write__icons">
              <button type="button" onClick={() => shareOpen()}>
                <Icon size={17} content="share" fill="#000" />
              </button>
              <button type="button">
                <Icon size={18} content="heart-off" fill="#000" />
                <span>301</span>
              </button>
              <button type="button">
                <Icon size={18} content="reply" fill="#000" />
                <span>100</span>
              </button>
            </div>
          </div>
        </section>

        <ModalPopup
          opened={state.shareOpened}
          title="공유하기"
          className="modal-share"
          onCreate={this.handleShareOpened}
        >
          <div className="modal-share__buttons">
            <button type="button">
              <Icon content="share-kakao" size={50} />
            </button>
            <button type="button">
              <Icon content="share-facebook" size={50} />
            </button>
            <button type="button">
              <Icon content="share-mail" size={50} />
            </button>
            <button type="button">
              <Icon content="share-url" size={50} />
            </button>
            <button type="button">
              <Icon content="share-etc" size={50} />
            </button>
          </div>
        </ModalPopup>
      </PageWrap>
    );
  }
}

export default CommunityDetail;
