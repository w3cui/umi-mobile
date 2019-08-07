/*
 * @Author: tql
 * @Date: 2019-08-01 10:13
 * @Last Modified by: 头部
 * @Last Modified time: 2019-08-01 10:13
 */

import React, { PureComponent } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import Router from 'umi/router';
import { connect } from 'dva';
import PropTypes from 'prop-types';


import theme from '@/theme';
import styles from './style.less';
// import { url } from 'inspector';
class Header extends PureComponent {
  render() {
    const { children, position, is_show, is_background, nav_bar } = this.props;
    return (
      <NavBar
        className={`${styles.header} ${position ? styles.fixed : ''}`}
        style={{
          ...{ position: position }, ...(!is_background ? { background: "none" } : { backgroundImage: `url(${is_background[0]})`, backgroundColor: is_background[1] }), ...(!is_show ? { transform: 'translateY(-1rem) translateX(0px)' } : {})
        }}
        {...nav_bar}
      >
        {children}
      </NavBar >
    );
  }
}

Header.defaultProps = {
  pathname: '/',

};

Header.propTypes = {
  pathname: PropTypes.string,
};

export default Header;
