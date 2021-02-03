import React, { PureComponent } from 'react';
import PageWrap from '../../components/wrap/Page';
import NavBar from '../../components/ui/NavigationBars';
import CommentList from '../../components/list/Comment';

class ShopComment extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
    return (
      <PageWrap fixed footFixed className="page-comment">
        <PageWrap.top>
          <NavBar title="댓글 5" back />
        </PageWrap.top>

        <CommentList list={commentListArr} />

        <PageWrap.bottom>
          <div className="comment-write">
            <div className="comment-write__inner">
              <div className="comment-write__input">
                <input type="text" placeholder="댓글쓰기" />
                <button type="button">등록</button>
              </div>
            </div>
          </div>
        </PageWrap.bottom>
      </PageWrap>
    );
  }
}

export default ShopComment;
