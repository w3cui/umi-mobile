
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Flex } from 'antd-mobile';
import { Category, Icons, Goods, Images, MySwiper } from '@/components';
import Link from 'umi/link';

import styles from './index.less';

const QuanSvg = (props) => {
  const height = window.innerWidth * (70 / 345);
  const width = window.innerWidth;
  return <svg width={width} height={height} version="1.1" viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg" >
    <defs>
      <linearGradient x1="0%" y1="38.3032726%" x2="100%" y2="38.3032726%" id="linearGradient-1">
        <stop stop-color="#FF4183" offset="0%"></stop>
        <stop stop-color="#FF1F4C" offset="100%"></stop>
      </linearGradient>
      <linearGradient x1="0%" y1="38.3032726%" x2="100%" y2="38.3032726%" id="linearGradient-2">
        <stop stop-color="#FF4183" offset="0%"></stop>
        <stop stop-color="#FF1F4C" offset="100%"></stop>
      </linearGradient>
      <linearGradient x1="0%" y1="38.3032726%" x2="100%" y2="38.3032726%" id="linearGradient-3">
        <stop stop-color="#FF4183" offset="0%"></stop>
        <stop stop-color="#FF1F4C" offset="100%"></stop>
      </linearGradient>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="无字">
        <rect id="矩形备份-10" fill="url(#linearGradient-1)" x="0" y="0" width={width} height={height} rx="10"></rect>
        <path d="M5,43 C9.418278,43 13,39.418278 13,35 C13,30.581722 9.418278,27 5,27 L5,10 C5,7.23857625 7.23857625,5 10,5 L334,5 C336.761424,5 339,7.23857625 339,10 L339,60 C339,62.7614237 336.761424,65 334,65 L10,65 C7.23857625,65 5,62.7614237 5,60 L5,43 Z" id="Combined-Shape备份-2" fill="#FFFFFF" opacity="0.96" transform="translate(172.000000, 35.000000) scale(-1, 1) translate(-172.000000, -35.000000) "></path>
        <path d="M-4.54747351e-13,0 L249,0 C254.522847,-1.01453063e-15 259,4.4771525 259,10 L259,60 C259,65.5228475 254.522847,70 249,70 L25.9593619,70 L-4.54747351e-13,0 Z" id="形状结合备份-5" fill="url(#linearGradient-2)" transform="translate(129.500000, 35.000000) scale(-1, 1) translate(-129.500000, -35.000000) "></path>
        <text id="立即领券备份-2" fill="url(#linearGradient-3)" font-family="PingFangSC-Medium, PingFang SC" font-size="15" font-weight="400" letter-spacing="0.45">
          <tspan x="258.2" y="41">立即领券</tspan>
        </text>
      </g>
    </g>
  </svg>;
}

@connect(({ category, modelInfo, loading }) => ({
  category,
  modelInfo,
  // loading,
  firsstListLoading: loading.effects['category/GetCategorysList'],
}))
class Categorys extends PureComponent {
  constructor(props) {
    super(props);
    this.clientHeight = window.document.body.clientHeight;
  }

  componentDidMount() {
    const { route, modelInfo: { info, hreader }, dispatch } = this.props;
    dispatch({
      type: 'modelInfo/editHreader',
      payload: {
        ...hreader,
        ...{
          // nav_bar: { ...hreader.nav_bar, ...{ icon: "", rightContent: <Icons type={`search`} /> } },
          // is_background: false,
          position: 'fixed',
          is_show: false,
        },
      }
    });
  }

  handleSwiper() {

  }
  render() {
    const { category, modelInfo: { info, hreader } } = this.props;
    // console.log(this.wrapNode);
    return (
      <div className={styles.detailedLayout}   >
        <MySwiper
          wrapId={`detailedSwiper`}
          config={{
            pagination: '.swiper-pagination',
            paginationClickable: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            lazyLoadingClass: 'swiper-lazy',
            lazyLoading: true,
            lazyLoadingInPrevNextAmount: 1,
            lazyLoadingOnTransitionStart: true,
          }}
          children={<>
            {[1, 2, 3].map((item, key) => <div key={key} className={`swiper-slide`} >
              <Images srcs={`https://img.alicdn.com/imgextra/i1/619123122/O1CN01zhluLu1Yvv3Bm61xk_!!619123122.jpg_480x480.jpg`} />
            </div>)}
          </>
          }
          onRender={this.handleSwiper.bind(this)}
        />
        <div className={styles.goodsInfo}>
          <h3 className={`col-mar`}><span>天猫</span>【拍2件】【良品铺子】麻辣零食大礼包</h3>
          <Flex className={`info col-mar`}>
            <Flex.Item className={`text-left col-money`}>券后价 <span className={``} ><i>¥</i>34.9</span></Flex.Item>
            <Flex.Item className={`text-right num`}>已售<span className={`col-red`} >27.8万</span>件</Flex.Item>
          </Flex>
          <Flex className={`info col-mar`}>
            <Flex.Item className={`text-left tm`}>天猫价 ¥39.9</Flex.Item>
            <Flex.Item className={`auth text-right`}>
              <span><Icons type={`detail`} className={`col-money`} />包邮</span>
              <span><Icons type={`detail`} className={`col-money`} />运费险</span>
            </Flex.Item>
          </Flex>

          <div className={`${styles.quanBtn} col-mar`}>
            <div className={styles.text}>
              <p className={styles.quan}><span>36.5</span>元优惠券</p>
              <p className={styles.time}>使用期限：2018.5.30-2018.6.30</p>
            </div>
            <span className={styles.tab}>立即领券</span>
            {/* <QuanSvg quan={35.31} time={`2018.5.30-2018.6.30`} /> */}
          </div>

          <div className={`${styles.desc} col-mar`}>
            原装正品，采用高品质锌合金外壳，进口芯片，提速50%，速度显而易见，兼容多种设备，抗压、防水还防震，让你的文件存…
            </div>

        </div>

        <div className={`${styles.goodsShop} col-mar`}>
          <div className={`info col-mar`}>
            <img src="https://img.alicdn.com/imgextra//i1/619123122/O1CN011YvuzJWPCJpIVE2_!!619123122.png_310x310.jpg" alt="" />
            <div className={`text`}>
              <h3>良品铺子旗舰店</h3>
              <p className={`col-main`}>
                <i className={`iconfont icon-tmall `}></i>
              </p>
              <p className={`new`}>
                店铺所有优惠<i className={`iconfont icon-youjiantou`}></i>
              </p>
            </div>
          </div>
          <Flex className={`tab col-mar text-center`}>
            <Flex.Item className={`text-left tm`}>
              宝贝描述:4.8<span className={`iconfont icon-high lv_g`}></span>
            </Flex.Item>
            <Flex.Item className={`auth text-right`}>
              卖家服务:4.8<span className={`iconfont icon-high lv_g`}></span>
            </Flex.Item>
            <Flex.Item className={`auth text-right`}>
              物流服务:4.8<span className={`iconfont icon-high lv_g`}></span>
            </Flex.Item>
          </Flex>
        </div>

        <Goods.VerticalRow item={[1, 2, 4, 1, 2, 4, 1, 2, 4]} />


      </div>
    );
  }
}

export default Categorys;
