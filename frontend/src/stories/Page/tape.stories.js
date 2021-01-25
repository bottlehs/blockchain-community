import React from 'react';
import TapeMain from '../../page/tape/TapeMain';
import CalorieCalendar from '../../page/tape/CalorieCalendar';

export default {
  title: 'Page|줄자',
};

export const TapeMainComponent = () => {
  return <TapeMain />;
};
TapeMainComponent.story = { name: '줄자' };

export const CalorieCalendarComponent = () => {
  return <CalorieCalendar />;
};
CalorieCalendarComponent.story = { name: '달력' };
