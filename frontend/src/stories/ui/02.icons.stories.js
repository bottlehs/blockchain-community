import React from 'react';
import Icon from '../../components/ui/Icon';
import Image from '../../components/ui/Image';

export default {
  title: 'ui|icon',
};

export const iconComponent = () => {
  return (
    <div className="icon-guide">
      <ul>
        <li>
          <Icon size={19} content="arrow-left" fill="#000" />
        </li>
        <li>
          <Icon size={15} content="close" fill="#000" />
        </li>
        <li>
          <Icon size={12} content="close" fill="#acacac" />
        </li>
        <li>
          <Icon size={23} content="menu" />
        </li>
        <li>
          <Icon size={18} content="share" fill="#000" />
        </li>
        <li>
          <Icon size={18} content="reply" fill="#000" />
        </li>
        <li>
          <Icon size={22} content="lock" fill="#000" />
        </li>
        <li>
          <Icon size={13} content="check" fill="#AD35CF" />
        </li>
        <li>
          <Icon size={11} content="plus" fill="#888" />
        </li>
      </ul>
      <ul>
        <li>
          <Icon size={15} content="arrow-down" fill="#000" />
        </li>
        <li>
          <Icon size={15} content="arrow-down" fill="#d1d1d1" />
        </li>
        <li>
          <Icon size={15} content="arrow-up" fill="#000" />
        </li>
        <li>
          <Icon size={15} content="arrow-up" fill="#d1d1d1" />
        </li>
        <li>
          <Icon size={13} content="arrow-right" fill="#ccc" />
        </li>
        <li>
          <Icon size={13} content="arrow-right" fill="#000" />
        </li>
        <li>
          <Icon size={13} content="arrow-right" fill="#6C008B" />
        </li>
      </ul>
      <ul>
        <li>
          <Icon size={31} content="star" fill="#AD35CF" />
        </li>
        <li>
          <Icon size={31} content="star-line" stroke="#d1d1d1" />
        </li>
        <li>
          <Icon size={15} content="star" fill="#AD35CF" />
        </li>
        <li>
          <Icon size={15} content="star" fill="#ccc" />
        </li>
        <li>
          <Icon size={18} content="heart-on" fill="#AD35CF" />
        </li>
        <li>
          <Icon size={18} content="heart-off" fill="#000" />
        </li>
        <li>
          <Icon size={14} content="heart-on" fill="#AD35CF" />
        </li>
        <li>
          <Icon size={14} content="heart-off" fill="#666" />
        </li>
        <li>
          <Icon size={11} content="minus" fill="#888" />
        </li>
      </ul>
      <ul>
        <li>
          <div className="icon-top">
            <Icon size={21} content="up" />
          </div>
        </li>
        <li>
          <Icon size={28} content="plus" fill="#888" />
        </li>
        <li>
          <Icon dynamicClass="icon-write" size={45} content="write" />
        </li>
        <li>
          <Icon content="share-facebook" size={50} />
        </li>
        <li>
          <Icon content="share-kakao" size={50} />
        </li>
        <li>
          <Icon content="share-mail" size={50} />
        </li>
        <li>
          <Icon content="share-url" size={50} />
        </li>
        <li>
          <Icon content="share-etc" size={50} />
        </li>
        <li>
          <Icon content="camera" size={40} fill="#888" />
        </li>
      </ul>
      <ul>
        <li>
          <Icon size={28} content="plus" fill="#fff" />
        </li>
        <li>
          <Icon size={19} content="arrow-left" fill="#fff" />
        </li>
        <li>
          <Icon size={30} content="arrow-left" fill="rgba(255,255,255,0.7)" />
        </li>
        <li>
          <Icon size={30} content="arrow-right" fill="rgba(255,255,255,0.7)" />
        </li>
        <li>
          <Icon size={12} content="close" fill="#fff" />
        </li>
      </ul>
    </div>
  );
};
iconComponent.story = {
  name: 'icon',
};

export const imageComponent = () => {
  return (
    <div className="image-guide">
      <ul className="type1">
        <li>
          <div>
            <Image content="logo" />
          </div>
          <div>
            <Image content="logo-short" />
          </div>
          <div>
            <Image content="logo-short" dynamicStyle="point" />
          </div>
        </li>
        <li>
          <div>
            <Image content="delivery1" />
            <Image content="delivery2" />
            <Image content="delivery3" />
          </div>
          <div>
            <Image content="delivery1" dynamicStyle="active" />
            <Image content="delivery2" dynamicStyle="active" />
            <Image content="delivery3" dynamicStyle="active" />
          </div>
        </li>
        <li>
          <Image content="crown" dynamicStyle="active" />
        </li>
        <li>
          <Image content="photo1" />
          <Image content="photo2" />
        </li>
      </ul>
      <ul className="type2">
        <li>
          <img src={require('../../assets/images/prime/popup1.png')} alt="" />
        </li>
        <li>
          <img src={require('../../assets/images/prime/popup2.png')} alt="" />
        </li>
        <li>
          <img src={require('../../assets/images/prime/popup3.png')} alt="" />
        </li>
        <li>
          <img src={require('../../assets/images/prime/popup4.png')} alt="" />
        </li>
        <li>
          <img src={require('../../assets/images/banner/shop.png')} alt="" />
        </li>
      </ul>
    </div>
  );
};
imageComponent.story = {
  name: 'image',
};
