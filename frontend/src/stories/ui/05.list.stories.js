import React from 'react';
import OrderList from '../../components/list/Order';
import DeliveryList from '../../components/list/Delivery';
import CandidReviewList from '../../components/list/CandidReview';
import ShopReviewList from '../../components/list/ShopReview';
import GodahaeList from '../../components/list/Godahae';
import FaqList from '../../components/list/FAQ';
import QuestionList from '../../components/list/Question';
import CommentList from '../../components/list/Comment';

export default {
  title: 'ui|list',
};

export const deliveryComponent = () => {
  const arr = [
    { id: 1, list: [{ status: 'payment-finished' }] },
    {
      id: 2,
      list: [
        { status: 'delivery-ready' },
        { status: 'delivery-ing' },
        { status: 'delivery-completed' },
      ],
    },
  ];
  return (
    <div className="page-sec">
      <DeliveryList list={arr} />
    </div>
  );
};
deliveryComponent.story = { name: '주문배송조회' };

export const orderComponent = () => {
  const arr = [
    { id: 1, options: [{ status: 'payment-finished' }] },
    {
      id: 2,
      options: [{}, {}, {}],
    },
  ];
  return (
    <div className="page-sec">
      <OrderList list={arr} />
    </div>
  );
};
orderComponent.story = { name: '주문하기' };

export const candidReviewComponent = () => {
  const arr = [{ id: 1 }, { id: 2 }];
  return (
    <div className="page-sec">
      <CandidReviewList list={arr} />
    </div>
  );
};
candidReviewComponent.story = { name: '솔직후기' };

export const godahaeListComponent = () => {
  const arr = [
    {
      id: 1,
      thumb: true,
      title:
        '제목 2줄까지 가능 제목 2줄까지 가능 제목 2줄 까지 가능 제목\n' +
        '2줄까지 가능 제목 2줄까지 가...',
      text:
        '내용 5줄까지 가능 내용 5줄까지 가능 내용 5줄까지 가능 내용 5\n' +
        '줄까지 가능 내용 5줄까지 가능 내용 5줄까지 가능 내용 5줄까지\n' +
        '가능 내용 5줄까지 가능 내용 5줄까지 가능 내용 5줄까지 가능 내용\n' +
        '5줄까지 가능 내용 5줄까지 가능 내용 5줄까지 가능 내용 5 줄까지\n' +
        '가능 내용 5줄까지 가능 내용 5줄까지 가능 내용 가능 내용 5 줄까지\n' +
        '가능 내용 5줄까지 가능 내용 5줄까지 가능 내용',
    },
    {
      id: 2,
      thumb: false,
      title:
        '제목 2줄까지 가능 제목 2줄까지 가능 제목 2줄 까지 가능 제목\n' +
        '2줄까지 가능 제목 2줄까지 가...',
      text:
        '내용 5줄까지 가능 내용 5줄까지 가능 내용 5줄까지 가능 내용 5\n' +
        '줄까지 가능 내용 5줄까지 가능 내용 5줄까지 가능 내용 5줄까지\n' +
        '가능 내용 5줄까지 가능 내용 5줄까지 가능 내용 5줄까지 가능 내용\n' +
        '5줄까지 가능 내용 5줄까지 가능 내용 5줄까지 가능 내용 5 줄까지\n' +
        '가능 내용 5줄까지 가능 내용 5줄까지 가능 내용 가능 내용 5 줄까지\n' +
        '가능 내용 5줄까지 가능 내용 5줄까지 가능 내용',
    },
  ];
  return (
    <div className="page-sec">
      <GodahaeList list={arr} />
    </div>
  );
};
godahaeListComponent.story = { name: '고다해' };

export const shoppingReviewComponent = () => {
  const arr = [{ id: 1 }, { id: 2 }];
  return (
    <div className="page-sec">
      <ShopReviewList list={arr} moreTitle="솔직후기" />
    </div>
  );
};
shoppingReviewComponent.story = { name: '쇼핑후기' };

export const FaqComponent = () => {
  const arr = [{ id: 1 }, { id: 2 }, { id: 3 }];
  return (
    <div className="page-sec">
      <FaqList list={arr} />
    </div>
  );
};
FaqComponent.story = { name: 'FAQ' };

export const QuestionListComponent = () => {
  const arr = [
    {
      id: 1,
      answerState: 'ing',
      title: '구독 프로그램 결제는 어떻게 하나요?',
      question:
        '구독 프로그램을 결제하려고 하는데 결제창이 보이지 않습니다. 어떻게 해야 결제 프로그램이 보일까요?',
      questionDate: '2020.7.5',
      answer:
        '안녕하세요 회원님. 문의주신 결제 프로그램은 현재 구독이 종료된 프로그램이라 결제가 불가능 합니다. 3월 중 오픈 하는 프로그램을 이용해 주세요. 감사합니다.',
      answerDate: '2020.01.04 16:24',
    },
    {
      id: 2,
      answerState: 'complete',
      title: '구독 프로그램 결제는 어떻게 하나요?',
      question:
        '구독 프로그램을 결제하려고 하는데 결제창이 보이지 않습니다. 어떻게 해야 결제 프로그램이 보일까요?',
      questionDate: '2020.7.5',
      answer:
        '안녕하세요 회원님. 문의주신 결제 프로그램은 현재 구독이 종료된 프로그램이라 결제가 불가능 합니다. 3월 중 오픈 하는 프로그램을 이용해 주세요. 감사합니다.',
      answerDate: '2020.01.04 16:24',
    },
    {
      id: 3,
      answerState: 'complete',
      secret: true,
      title: '구독 프로그램 결제는 어떻게 하나요?',
      question:
        '구독 프로그램을 결제하려고 하는데 결제창이 보이지 않습니다. 어떻게 해야 결제 프로그램이 보일까요?',
      questionDate: '2020.7.5',
      answer:
        '안녕하세요 회원님. 문의주신 결제 프로그램은 현재 구독이 종료된 프로그램이라 결제가 불가능 합니다. 3월 중 오픈 하는 프로그램을 이용해 주세요. 감사합니다.',
      answerDate: '2020.01.04 16:24',
    },
  ];
  return (
    <div className="page-sec">
      <QuestionList list={arr} />
    </div>
  );
};
QuestionListComponent.story = { name: '문의하기' };

export const CommentComponent = () => {
  const arr = [
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
    <div className="page-sec">
      <CommentList list={arr} />
    </div>
  );
};
CommentComponent.story = { name: '댓글' };
