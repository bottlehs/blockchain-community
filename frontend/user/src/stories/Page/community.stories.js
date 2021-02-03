import React from 'react';
import CandidReviewWrite from '../../page/community/CandidReviewWrite';
import WorryWrite from '../../page/community/WorryWrite';
import GodahaeMain from '../../page/community/GodahaeMain';
import GodahaeHashtag from '../../page/community/GodahaeHashtag';
import WriteTip from '../../page/community/WriteTip';
import PhotoAdd from '../../page/community/PhotoAdd';
import Declaration from '../../page/community/Declaration';
import HotCommunity from '../../page/community/HotCommunity';
import GodahaeCandidReview from '../../page/community/GodahaeCandidReview';
import GodahaeDetail from '../../page/community/GodahaeDetail';
import CommunityDetail from '../../page/community/CommunityDetail';

export default {
  title: 'Page|커뮤니티',
};

export const HotCommunityComponent = () => {
  return <HotCommunity />;
};
HotCommunityComponent.story = { name: '핫커뮤니티' };

export const CommunityDetailComponent = () => {
  return <CommunityDetail />;
};
CommunityDetailComponent.story = { name: '커뮤니티 상세' };


export const GodahaeMainComponent = () => {
  return <GodahaeMain />;
};
GodahaeMainComponent.story = { name: '고다해' };

export const GodahaeDetailComponent = () => {
  return <GodahaeDetail />;
};
GodahaeDetailComponent.story = { name: '고다해 상세' };

export const WorryWriteComponent = () => {
  return <WorryWrite />;
};
WorryWriteComponent.story = { name: '고민 말고 다해에게 물어봐!' };

export const GodahaeCandidReviewComponent = () => {
  return <GodahaeCandidReview />;
};
GodahaeCandidReviewComponent.story = { name: '고다해 솔직후기 리스트' };

export const CandidReviewWriteComponent = () => {
  return <CandidReviewWrite />;
};
CandidReviewWriteComponent.story = { name: '솔직후기작성' };

export const WriteTipComponent = () => {
  return <WriteTip type="candid" />;
};
WriteTipComponent.story = { name: '솔직후기 작성 Tip' };

export const GodahaeHashtagComponent = () => {
  return <GodahaeHashtag />;
};
GodahaeHashtagComponent.story = { name: '고다해_해시태그' };

export const GodahaeWriteTipComponent = () => {
  return <WriteTip type="godahae" />;
};
GodahaeWriteTipComponent.story = { name: '고다해 작성 Tip' };

export const PhotoAddComponent = () => {
  return <PhotoAdd type="godahae" />;
};
PhotoAddComponent.story = { name: '사진첨부' };

export const DeclarationComponent = () => {
  return <Declaration />;
};
DeclarationComponent.story = { name: '신고하기' };
