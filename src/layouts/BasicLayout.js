import React, { PureComponent } from 'react';
import Header from '@/components/Header';
import NProgress from 'nprogress';
import withRouter from 'umi/withRouter';
import { connect } from 'dva';
import '@/layouts/nprogress.less';

// NProgress.configure({ showSpinner: false });

// 底部有bar菜单
// const BarRoutes = ['/shop', '/', '/me', '/category'];
let currHref = '';

class BasicLayout extends PureComponent {
  render() {
    const { children, modelInfo: { hreader }, location, loading, dispatch } = this.props;
    const { href } = window.location; // 浏览器地址栏中地址
    if (currHref !== href) {
      // currHref 和 href 不一致时说明进行了页面跳转
      NProgress.start(); // 页面开始加载时调用 start 方法
      if (!loading.global) {
        // loading.global 为 false 时表示加载完毕
        NProgress.done(); // 页面请求完毕时调用 done 方法
        dispatch({
          type: 'modelInfo/editHreader',
          payload: {
            is_show: true,//是否显示头部
            is_background: false,//是否显示背景      
            children: <div>hao123商城</div>,//标题
            position: 'fixed',//定位方式
            nav_bar: {
              mode: 'dark',//'dark' enum{'dark', 'light'}
              icon: '',
            }
          }
        });
        currHref = href; // 将新页面的 href 值赋值给 currHref
      }
    }
    // if (BarRoutes.indexOf(location.pathname) < 0) {
    //   return <div>{children}</div>;
    // }

    return <div style={{ overflowX: 'hidden', minHeight: '100vh', background: "#f5f5f5" }}>
      <Header
        {...hreader}
      />
      {children}

    </div>;
  }
}

export default withRouter(
  connect(({ app, modelInfo, loading }) => ({ app, modelInfo, loading }))(BasicLayout)
);
