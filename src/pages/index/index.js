import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Button, Flex } from 'antd-mobile';
import { Category, Icons, MySwiper, QuanIcon, Goods } from '@/components';
import styles from './index.less';

@connect(({ modelInfo, loading }) => ({
  modelInfo,
  loading: loading.effects['category/GetCategorysList'],
}))

class Index extends PureComponent {
  componentDidMount() {
    const { route, modelInfo: { info, hreader }, dispatch } = this.props;
    dispatch({
      type: 'modelInfo/editHreader',
      payload: {
        ...hreader,
        ...{
          nav_bar: { ...hreader.nav_bar, ...{ icon: "" } },
          position: "absolute",
          is_show: true,
        },
      }
    });
  }

  handleSwiper() {

  }

  render() {
    const { route, modelInfo: { info, hreader } } = this.props;
    // const testList = Array.from({ length: 10 }, (v, i) => i);
    const pic = 'https://img.alicdn.com/imgextra/i3/1063264201/O1CN011apER51gu6PPa0MBz_!!1063264201.jpg_310x310.jpg';
    return (
      <div className={styles.homeLayout} style={{ backgroundImage: `url(${info.bodyImage})`, backgroundPositionY: `0px`, backgroundColor: info.bodyColor }} >
        <Category />
        <div className={styles.search}>
          <Icons type="search" />搜索全网优惠券
        </div>
        <div className={styles.column}>
          <MySwiper
            config={{
              direction: 'horizontal',
              slidesPerView: "auto",
              paginationClickable: true,
              activeSlide: 0,
            }}
            children={<>
              <div className={`swiper-slide`} ><img src={require('../../assets/home/home_05.png')} /></div>
              <div className={`swiper-slide`} ><img src={require('../../assets/home/home_02.png')} /></div>
              <div className={`swiper-slide`} ><img src={require('../../assets/home/home_03.png')} /></div>
              <div className={`swiper-slide`} ><img src={require('../../assets/home/home_01.png')} /></div>
              <div className={`swiper-slide`} ><img src={require('../../assets/home/home_04.png')} /></div>
            </>
            }
            onRender={this.handleSwiper.bind(this)}
          />
        </div>
        <div className={styles.hotGoods}>
          <p className={styles.pic}><img src={pic} /></p>
          <div className={styles.center}>
            <div className={styles.name}><span>好货限秒</span> 2019网红蛋黄饼干4大袋</div>
            <div className={styles.tag}><span>9.9包邮</span><span>9.9包邮</span><span>9.9包邮</span></div>
          </div>
        </div>

        <div className={styles.h3bt}>
          <span className={styles.name}>超级好券</span>
          <div className={styles.but}>
            <Button type="primary" size={`small`}><Icons type={'loading'} />换一组</Button>
          </div>
        </div>

        <div className={styles.rowCjhq}>
          <Flex>
            {[1, 2, 3].map((item, key) => <Flex.Item key={key}>
              <div className={styles.center}>
                <div className={styles.pic}>
                  <p className={`${styles.tab} ${styles[`t${key}`]}`}><span>历史低价</span></p>
                  <img src={pic} />
                </div>
                <div className={styles.name}>网红纽扣连衣裙…</div>
                <div className={styles.quan}>
                  <i>¥</i><span>12.9</span>券后价
                </div>
              </div>
            </Flex.Item>)}

          </Flex>
        </div>

        <div className={styles.h3bt}>
          <span className={styles.name}>疯抢排行</span>
          <div className={styles.but}>
            <a className={styles.btnLink} size={`small`}>查看更多&nbsp;<Icons styles={{ top: '1px' }} type={'gengduo'} /></a>
          </div>
        </div>

        <div className={styles.goodsHot}>
          <MySwiper
            wrapId={`goodsHot`}
            config={{
              direction: 'horizontal',
              slidesPerView: "auto",
              paginationClickable: true,
              activeSlide: 0,
            }}
            children={<>
              {[1, 2, 3].map((item, key) => <div key={key} className={`swiper-slide`} >
                <div className={styles.center}>
                  <div className={styles.pic}>
                    <p className={`${styles.tab} ${styles[`t${key}`]}`}><span>{key + 1}</span></p>
                    <img src={pic} />
                  </div>
                  <div className={styles.name}>网红纽扣连衣裙…</div>
                  <div className={styles.quans}><QuanIcon text={'25.3'} /></div>
                  <div className={styles.quan}>
                    <i>¥</i><span>12.9</span><del>券后价</del>
                  </div>
                </div>
              </div>)}
            </>
            }
            onRender={this.handleSwiper.bind(this)}
          />
        </div>

        <div className={styles.h3bt}>
          <span className={styles.name}>为您推荐</span>
        </div>
        <Goods.VerticalRow item={[1, 2, 4]} />
      </div>
    );
  }
}

export default Index;
