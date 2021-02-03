import React from 'react';
import ButtonWrap from '../../components/wrap/ButtonWrap';
import Button from '../../components/ui/Button';
import NavBar from '../../components/ui/NavigationBars';
import Calendar from '../../components/ui/Calendar';
import Quantity from '../../components/ui/Quantity';

export default {
  title: 'ui|guide',
};

export const buttonComponent = () => {
  return (
    <div className="button-guide">
      <div className="button-guide-inner">
        <ButtonWrap isPadding>
          <ButtonWrap.col>
            <Button className="btBgGray" size="lg" label="사이즈 lg" radius />
          </ButtonWrap.col>
          <ButtonWrap.col>
            <Button className="btBgMain" size="lg" label="사이즈 lg" radius />
          </ButtonWrap.col>
        </ButtonWrap>

        <ButtonWrap>
          <Button className="btBgMain" size="lg" label="사이즈 lg" radius />
        </ButtonWrap>

        <ButtonWrap>
          <Button className="btLineGrayM" size="md" label="사이즈 md" radius />
        </ButtonWrap>
      </div>

      <ButtonWrap>
        <ButtonWrap.col>
          <Button className="btBgMain" size="lg" label="사이즈 lg" />
        </ButtonWrap.col>
        <ButtonWrap.col>
          <Button className="btBgMain" size="lg" label="사이즈 lg" />
        </ButtonWrap.col>
      </ButtonWrap>

      <ButtonWrap>
        <Button className="btBgMain" size="lg" label="사이즈 lg" />
      </ButtonWrap>

      <ButtonWrap limit>
        <Button className="btBgPoint" size="md" label="사이즈 md" radius />
        <Button className="btLineGray" size="md" label="사이즈 md" radius />
        <Button className="btLineGray" size="md" label="사이즈 md" radius />
        <Button className="btLineGray" size="md" label="사이즈 md" radius />
      </ButtonWrap>

      <div className="quantity">
        <Quantity />
        <Button
          className="btLineMain"
          size="ze"
          label="바로주문"
          onClick={() => alert('clicked')}
        />
        <Button className="btLineGray" size="sm" label="사이즈 sm" radius />
      </div>
    </div>
  );
};
buttonComponent.story = {
  name: 'button',
};

export const navBarComponent = () => {
  return (
    <div className="nav-guide">
      <NavBar menu active="m1" icon="menu" />
      <NavBar menu active="m2" icon="menu" />
      <NavBar back title="타이틀" />
      <NavBar title="타이틀" icon="close" />
      <NavBar logo icon="menu" />
      <NavBar back title="타이틀" icon="menu" />
      <NavBar back title="타이틀" icon="close" />
    </div>
  );
};
navBarComponent.story = {
  name: 'navigations',
};

export const CalendarComponent = () => {
  const arr = {
    '2020-03-30': {
      status: 'keep',
    },
    '2020-04-01': {
      status: 'out',
    },
    '2020-04-03': {
      status: 'out',
    },
    '2020-04-04': {
      status: 'keep',
    },
  };
  return (
    <div className="calendar-guide">
      <Calendar />
      <Calendar calorieStatus={arr} />
    </div>
  );
};
CalendarComponent.story = {
  name: 'calendar',
};
