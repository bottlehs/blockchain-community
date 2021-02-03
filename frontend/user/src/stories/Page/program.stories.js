import React from 'react';
import ProgramMain from '../../page/program/ProgramMain';
import CandidReviewWrite from '../../page/program/CandidReviewWrite';
import ProgramDetail from '../../page/program/ProgramDetail';

export default {
  title: 'Page|프로그램',
};

export const ProgramMainComponent = () => {
  return <ProgramMain />;
};
ProgramMainComponent.story = { name: '건강비서 밀착마크' };

export const CandidReviewWriteComponent = () => {
  return <CandidReviewWrite />;
};
CandidReviewWriteComponent.story = { name: '솔직후기작성' };

export const ProgramDetailComponent = () => {
  return <ProgramDetail />;
};
ProgramDetailComponent.story = { name: '프로그램' };
