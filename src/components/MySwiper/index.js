/*
 * @Author: tql
 * @Date: 2019-08-01 10:13
 * @Last Modified by: 滑动
 * @Last Modified time: 2019-08-01 10:13
 */
import React, { PureComponent } from 'react';

import { connect } from 'dva';
import Swiper from 'Swiper';
import { ScrollWrap, Icons } from '@/components'
import PropTypes from 'prop-types';

import styles from './style.less';
class Header extends PureComponent {
  state = {
    isShowUp: false,
  }
  componentDidMount() {
    const { children, position, wrapId, activeSlide, config, onRender } = this.props;
    this.mySwiper = new Swiper(`#${wrapId}`, config)
    onRender(this.mySwiper);
  }
  componentWillUnmount() {
    this.mySwiper.removeAllSlides();
  }
  handleClick() {
    this.setState({ isShowUp: !this.state.isShowUp })
  }
  render() {
    const { isShowUp } = this.state;
    const { children, position, wrapId, activeSlide } = this.props;
    return (
      <div id={wrapId} className={`swiper-container`} >
        <div className="swiper-wrapper">
          {
            children
          }
        </div>
      </div>
    );
  }
}

Header.defaultProps = {
  wrapId: 'mySwiper',
  children: <div className={`swiper-slide`} ></div>,
  config: {
    direction: 'horizontal',
    slidesPerView: 'auto',
    paginationClickable: true,
    activeSlide: 0,
    spaceBetween: 30
  },
  render: () => { }
};

Header.propTypes = {
  wrapId: PropTypes.string,
  children: PropTypes.object,
  config: PropTypes.object,
  onRender: PropTypes.func,
};

export default Header;
