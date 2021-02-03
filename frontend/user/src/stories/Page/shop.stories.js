import React from 'react';
import ShopMain from '../../page/shopping/Main';
import Comment from '../../page/shopping/Comment';
import QuestionWrite from '../../page/shopping/QuestionWrite';
import Cart from '../../page/shopping/Cart';
import WishList from '../../page/shopping/WishList';
import CommentWrite from '../../page/shopping/CommentWrite';
import Detail from '../../page/shopping/Detail';

export default {
  title: 'Page|쇼핑',
};

export const MainComponent = () => {
  return <ShopMain />;
};
MainComponent.story = { name: '쇼핑메인' };

export const ShopDetailComponent = () => {
  return <Detail />;
};
ShopDetailComponent.story = { name: '상품상세' };

export const CommentComponent = () => {
  return <Comment />;
};
CommentComponent.story = { name: '댓글' };

export const QuestionWriteComponent = () => {
  return <QuestionWrite />;
};
QuestionWriteComponent.story = { name: '문의하기' };

export const CommentWriteComponent = () => {
  return <CommentWrite />;
};
CommentWriteComponent.story = { name: '후기작성' };

export const CartComponent = () => {
  return <Cart />;
};
CartComponent.story = { name: '장바구니' };

export const wishListComponent = () => {
  return <WishList />;
};
wishListComponent.story = { name: '찜한상품' };
