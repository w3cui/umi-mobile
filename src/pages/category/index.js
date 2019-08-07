
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Flex } from 'antd-mobile';
import { Category, Icons, Goods, Images } from '@/components';
import Link from 'umi/link';

import styles from './index.less';

const PriceSvg = (props) => (<svg width="14px" height="26px" viewBox="0 0 7 13" version="1.1" xmlns="http://www.w3.org/2000/svg" >
  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <g id="类目页" transform="translate(-339.000000, -412.000000)" fill="#D8D8D8">
      <g id="编组-2" transform="translate(338.000000, 412.000000)">
        <path style={{ fill: props.desc }} d="M5.3,1.06666667 L7.8,4.4 C8.13137085,4.8418278 8.0418278,5.46862915 7.6,5.8 C7.42690383,5.92982213 7.21637021,6 7,6 L2,6 C1.44771525,6 1,5.55228475 1,5 C1,4.78362979 1.07017787,4.57309617 1.2,4.4 L3.7,1.06666667 C4.03137085,0.624838867 4.6581722,0.535295817 5.1,0.866666667 C5.17580567,0.923520916 5.24314575,0.990861001 5.3,1.06666667 Z" id="三角形"></path>
        <path style={{ fill: props.asce }} d="M5.3,8.06666667 L7.8,11.4 C8.13137085,11.8418278 8.0418278,12.4686292 7.6,12.8 C7.42690383,12.9298221 7.21637021,13 7,13 L2,13 C1.44771525,13 1,12.5522847 1,12 C1,11.7836298 1.07017787,11.5730962 1.2,11.4 L3.7,8.06666667 C4.03137085,7.62483887 4.6581722,7.53529582 5.1,7.86666667 C5.17580567,7.92352092 5.24314575,7.990861 5.3,8.06666667 Z" id="三角形备份" transform="translate(4.500000, 10.000000) scale(1, -1) translate(-4.500000, -10.000000) "></path>
      </g>
    </g>
  </g>
</svg>);

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
          nav_bar: { ...hreader.nav_bar, ...{ icon: "", rightContent: <Icons type={`search`} /> } },
          is_background: [info.bodyImage, info.bodyColor],
          position: 'fixed',
          is_show: true,
        },
      }
    });
  }

  render() {
    const { category, modelInfo: { info, hreader }, match: { params } } = this.props;
    // console.log(this.wrapNode);
    return (
      <div className={styles.categoryLayout} style={{ backgroundImage: `url(${info.bodyImage})`, backgroundPositionY: `0px`, backgroundColor: info.bodyColor }}  >
        <div className={styles.main} >
          <div className={styles.categoryNav} style={{ backgroundImage: `url(${info.bodyImage})`, backgroundPositionY: `-.9rem`, backgroundColor: info.bodyColor }} >
            <Category activeSlide={parseInt(params.id || 0)} wrapId={`categoryHeader`} />
          </div>
          <div className={styles.categoryTwoList}>
            {[0, 1, 2, 3, 0, 1, 2, 3].map((res, key) => <Link key={key} to={`/`} >
              <p className={styles.pic}><Images /></p>
              <span className={styles.name}>分类</span>
            </Link>)}
          </div>

          <Flex className={styles.flexTag}>
            <Flex.Item className={styles.active}>
              人气
            </Flex.Item>
            <Flex.Item>
              最新
            </Flex.Item>
            <Flex.Item>
              销量
            </Flex.Item>
            <Flex.Item className={styles.price}>
              <span>
                价格 <PriceSvg desc={info.bodyColor} asce={'#D8D8D8'} />
              </span>
            </Flex.Item>
          </Flex>

          <Goods.VerticalRow item={[1, 2, 4, 1, 2, 4, 1, 2, 4]} />

        </div>

      </div>
    );
  }
}

export default Categorys;
