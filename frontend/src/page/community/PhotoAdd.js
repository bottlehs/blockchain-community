import React, { PureComponent } from 'react';
import PageWrap from '../../components/wrap/Page';
import NavBar from '../../components/ui/NavigationBars';
import Icon from '../../components/ui/Icon';

class PhotoAdd extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PageWrap className="page-photo-add">
        <PageWrap.top>
          <NavBar title="사진첨부" back>
            <button type="button" className="photo-upload">
              올리기
            </button>
          </NavBar>
        </PageWrap.top>
        <div className="photo-add">
          <ul>
            <li>
              <div className="photo-add__box">
                <button type="button" className="photo-add__camera">
                  <Icon content="camera" size={40} fill="#888" />
                </button>
              </div>
            </li>
            <li className="active">
              <div className="photo-add__box">
                <span className="photo-add__selected-num">1</span>
                <div className="photo-add__thumb">
                  <img
                    src={require('../../assets/images/temp/order.jpg')}
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li className="active">
              <div className="photo-add__box">
                <span className="photo-add__selected-num">2</span>
                <div className="photo-add__thumb">
                  <img
                    src={require('../../assets/images/temp/order.jpg')}
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="photo-add__box">
                <div className="photo-add__thumb">
                  <img
                    src={require('../../assets/images/temp/order.jpg')}
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="photo-add__box">
                <div className="photo-add__thumb">
                  <img
                    src={require('../../assets/images/temp/order.jpg')}
                    alt=""
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </PageWrap>
    );
  }
}

export default PhotoAdd;
