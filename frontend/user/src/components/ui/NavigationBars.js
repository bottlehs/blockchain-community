import React, { PureComponent } from 'react';
import Icon from './Icon';
import Image from './Image';

class NavBar extends PureComponent {
  Menu = ({ is, active }) => {
    if (!is) return null;
    const menuArr = [
      { text: '핫커뮤니티', value: 'm1' },
      { text: '고다해', value: 'm2' },
      { text: '다톡', value: 'm3' },
    ];
    return (
      <div className="nav-bar__menu">
        <ul>
          {menuArr.map((item) => (
            <li
              key={item.value}
              className={item.value === active ? 'nav-bar__menu--active' : ''}
            >
              <a href="# ">{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  Logo = ({ is }) => {
    if (!is) return null;
    return (
      <div className="nav-bar__logo">
        <Image content="logo" width={117} height={28} />
      </div>
    );
  };

  Back = ({ is }) => {
    if (!is) return null;
    return (
      <div className="nav-bar__back">
        <button type="button">
          <Icon size={19} content="arrow-left" />
        </button>
      </div>
    );
  };

  Title = ({ title }) => {
    if (!title) return null;
    return <div className="nav-bar__title">{title}</div>;
  };

  Icons = ({ icon }) => {
    if (!icon) return null;
    const size = icon === 'menu' ? 22 : 15;
    return (
      <div className="nav-bar__icons">
        <button type="button">
          <Icon size={size} content={icon} />
        </button>
      </div>
    );
  };

  Bottom = ({ active }) => {
    const footArr = [
      {
        off: require('../../assets/images/layout/foot-nav1-off.png'),
        on: require('../../assets/images/layout/foot-nav1-on.png'),
        value: 'f1',
      },
      {
        off: require('../../assets/images/layout/foot-nav2-off.png'),
        on: require('../../assets/images/layout/foot-nav2-on.png'),
        value: 'f2',
      },
      {
        off: require('../../assets/images/layout/foot-nav3-off.png'),
        on: require('../../assets/images/layout/foot-nav3-on.png'),
        value: 'f3',
      },
    ];
    return (
      <ul>
        {footArr.map((item) => (
          <li key={item.value}>
            <button type="button">
              <img src={item.value === active ? item.on : item.off} alt="" />
            </button>
          </li>
        ))}
      </ul>
    );
  };

  render() {
    const propsData = this.props;
    const onlyBack =
      propsData.back && !propsData.icon ? 'nav-bar--only-back' : '';
    const onlyIcons =
      !propsData.back && propsData.icon ? 'nav-bar--only-icons' : '';
    const bottomClass = propsData.type === 'bottom' ? 'nav-bar--bottom' : '';
    return (
      <div className={`nav-bar ${onlyBack} ${onlyIcons} ${bottomClass}`}>
        <div className="nav-bar__inner">
          <this.Menu is={propsData.menu} active={propsData.active} />
          <this.Logo is={propsData.logo} />
          <this.Back is={propsData.back} />
          <this.Title title={propsData.title} />
          <this.Icons icon={propsData.icon} />
          {propsData.children}
          {propsData.type === 'bottom' ? (
            <this.Bottom active={propsData.active} />
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}

export default NavBar;
