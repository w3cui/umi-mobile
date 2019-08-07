/*
 * @Author: tql
 * @Date: 2019-08-01 10:13
 * @Last Modified by: 头部
 * @Last Modified time: 2019-08-01 10:13
 */

import React, { PureComponent } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import Link from 'umi/link';
import router from 'umi/router';

import { connect } from 'dva';
import Swiper from 'Swiper';
import { ScrollWrap, Icons } from '@/components'
import PropTypes from 'prop-types';

import styles from './style.less';
class Header extends PureComponent {
  state = {
    isShowUp: false,
  }
  componentWillMount() {
    const firstList = [{ name: '首页', "id": 0 }, { "id": 1, "name": "女装", "img1": "https://img.alicdn.com/imgextra/i4/2053469401/O1CN01JqRCmw2JJhxmPeuO2_!!2053469401.png" },
    { "id": 6, "name": "美食", "img1": "https://img.alicdn.com/imgextra/i2/2053469401/O1CN01DwM5292JJhxmPdhWq_!!2053469401.png" },
    { "id": 9, "name": "男装", "img1": "https://img.alicdn.com/imgextra/i2/2053469401/O1CN01yE0dyk2JJhxnBSR0y_!!2053469401.png" },
    { "id": 3, "name": "美妆", "img1": "https://img.alicdn.com/imgextra/i4/2053469401/O1CN01BQL1p52JJhxl3LPU0_!!2053469401.png" },
    { "id": 4, "name": "居家日用", "img1": "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01UsEjhB2JJhxnBRpZK_!!2053469401.png" },
    { "id": 5, "name": "鞋品", "img1": "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01Nwm62k2JJhxpho3Sc_!!2053469401.png" },
    { "id": 8, "name": "数码家电", "img1": "https://img.alicdn.com/imgextra/i4/2053469401/O1CN01wCJmEZ2JJhxYrHGw5_!!2053469401.png" },
    { "id": 2, "name": "母婴", "img1": "https://img.alicdn.com/imgextra/i4/2053469401/O1CN01CjDfsI2JJhxk7wD8P_!!2053469401.png" },
    { "id": 10, "name": "内衣", "img1": "https://img.alicdn.com/imgextra/i3/2053469401/O1CN01oehm2I2JJhxnBUFGo_!!2053469401.png" },
    { "id": 11, "name": "箱包", "img1": "https://img.alicdn.com/imgextra/i3/2053469401/O1CN01HQB7Wt2JJhxmo16CM_!!2053469401.png" },
    { "id": 12, "name": "配饰", "img1": "https://img.alicdn.com/imgextra/i3/2053469401/O1CN01t68jVR2JJhxl3iuRS_!!2053469401.png" },
    { "id": 7, "name": "文娱车品", "img1": "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01ZB1pRs2JJhxoLaGP8_!!2053469401.png" },
    { "id": 14, "name": "家装家纺", "img1": "https://img.alicdn.com/imgextra/i3/2053469401/O1CN01pGcMLz2JJhxoLcwgF_!!2053469401.png" },
    { "id": 13, "name": "户外运动", "img1": "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01StpKR92JJhxpB0x1Z_!!2053469401.png" }];

    this.setState({ firstList: firstList });
  }
  componentDidMount() {
    const { children, position, wrapId, activeSlide } = this.props;
    const { firstList } = this.state;
    const actions = firstList.map((res, key) => parseInt(res.id) === parseInt(activeSlide) ? key : false).filter(r => r !== false)[0];
    this.mySwiper = new Swiper(`#${wrapId}`, {
      direction: 'horizontal', // 垂直切换选项
      slidesPerView: 'auto',
      paginationClickable: true,
      activeSlide: actions,
      spaceBetween: 30
    })
    this.setState({ actions: actions });
    this.mySwiper.slideTo(actions, 600, false);
  }
  handleClick() {
    this.setState({ isShowUp: !this.state.isShowUp })
  }
  handleClickNav(key, item) {
    const { callback } = this.props;
    this.setState({ actions: key });
    router.push(`/category/${item.id}`)
    callback(key, item)
  }
  render() {
    const { isShowUp, firstList, actions } = this.state;
    const { children, position, wrapId, activeId, isNew } = this.props;
    return (
      <div className={`${styles.categoryTab} ${isNew ? styles.isNew : ''}`}>
        <div className={styles.center}>
          <div id={wrapId} className={`swiper-container`} >
            <div className="swiper-wrapper">
              {
                firstList.map((item, key) => (
                  <div onClick={this.handleClickNav.bind(this, key, item)} className={`${(actions ? actions === parseInt(key) : 0 === parseInt(key)) ? "active" : ''} swiper-slide`} key={key} >
                    {/* <Link to={`/category/${item.id}`}> */}
                    {item.name}
                    {/* </Link> */}
                  </div>
                ))
              }
            </div>
          </div>
          <div className={styles.open} onClick={this.handleClick.bind(this)}>
            <Icons type={isShowUp ? `shang` : `xia`} />
          </div>
          <div className={`${styles.boxCenter} ${isShowUp ? styles.active : ""}`}>
            {firstList.map((item, key) => (<div className={styles.items} key={key}><Link to={`/category/${item.id}`}   >
              <div className={styles.pic}><img src={item.img1} /></div>
              {item.name}
            </Link></div>))}
          </div>
        </div>
      </div>
    );
  }
}

Header.defaultProps = {
  wrapId: 'rootCategory',
  activeSlide: 0,
  isNew: true,
  callback: () => { },
};

Header.propTypes = {
  wrapId: PropTypes.string,
  activeSlide: PropTypes.number,
  isNew: PropTypes.bool,
  callback: PropTypes.func,
};

export default Header;
